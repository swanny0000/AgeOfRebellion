import { Characteristics } from "./characteristics.js";
import { Skills } from "./skills.js";
import { Talents } from "./talents.js";
import { Species } from "./species.js";
import { Armor } from "./armor.js";
import { Careers } from "./careers.js";
import * as Sheet from "./page_functions.js";
import * as IO from "./io_saver.js";

export class Character {
  constructor(char_name="", species="", from_load=false) {
    this.setName(char_name);
    this.characteristics = {}
    this.skills = {};
    this.talents = {};
    this.specializations = {};
    this.weapons = {};
    this.armor = "";
    this.isEditable = true;
    for (const skill of Skills.all_skills) {this.skills[skill] = {rank: 0, career: false};}
    if (species != "") {this.setSpecies(species);}
    else {
      console.log("Character Constructor: no species")
      for (const characteristic of Characteristics.list_base) {this.setCharVal(characteristic, 0);}
      this.setCharVal("Base Wounds Threshold", 0);
      this.setCharVal("Base Strain Threshold", 0);
      this.experience = 0;
      if (from_load != true) {this.refresh();}
    }
  }
  makeEditable() {this.isEditable = true;}
  makeUneditable() {this.isEditable = false;}
  setName(name) {this.char_name = name; this.refresh;}
  getName() {return this.char_name;}
  setSpecies(species) {
    this.species = species;
    for (const skill of Skills.all_skills) {this.setSkillRank(skill, 0);}
    for (const characteristic of Characteristics.list_base) {
      this.setCharVal(characteristic, Species.get_base_characteristic(this.species, characteristic));
    }
    this.setCharVal("Base Wounds Threshold", Species.calcBaseWoundsThreshold(this));
    this.setCharVal("Base Strain Threshold", Species.calcBaseStrainThreshold(this));
    if (Species.hasStartingSkills(this.species)) {
      for (const skill of Species.starting_skills(this.species)) {this.setSkillRank(skill, 1);}
    }
    if (Species.hasStartingTalents(this.species)) {
      for (const talent of Species.starting_talents(this.species)) {this.addTalent(talent);}
    }
    this.experience = Species.getStartingExperience(this.species);
    this.refresh();
  }
  setCharVal(characteristic, value, isCharCreate) {
    this.characteristics[characteristic] = +value;
    if (isCharCreate) {
      this.setCharVal("Base Wounds Threshold", Species.calcBaseWoundsThreshold(this));
      this.setCharVal("Base Strain Threshold", Species.calcBaseStrainThreshold(this));
    }
  }
  getCharVal(characteristic) {return this.characteristics[characteristic];}
  updateDerivedChar() {
    this.setCharVal("Soak", Armor.getArmorSoak(this.armor) + this.getCharVal("Brawn"));
    this.setCharVal("Wounds Threshold", this.getCharVal("Base Wounds Threshold"));
    this.setCharVal("Strain Threshold", this.getCharVal("Base Strain Threshold"));
    this.setCharVal("Defense (Ranged)", Armor.getArmorDefense(this.armor));
    this.setCharVal("Defense (Melee)", Armor.getArmorDefense(this.armor));
  }
  refresh() {
    this.updateDerivedChar();
    Sheet.updateCharacteristics(this);
    Sheet.updateSkills(this);
    Sheet.updateTalents(this);
    Sheet.updateWeapons(this);
    IO.saveCookies(this);
  }
  setSkillRank(skill, value) {if (this.getSkillRank(skill) < 5) {this.skills[skill].rank = value;}}
  getSkillRank(skill) {return this.skills[skill].rank;}
  setCareerSkill(skill, value=true) {this.skills[skill].career = value;}
  isCareerSkill(skill) {return this.skills[skill].career;}
  addTalent(talent) {this.talents[talent] = true;}
  removeTalent(talent) {delete this.talents[talent];}
  availableTalents() {
    let list = [];
    for (const talent in this.talents) {list.push(talent);}
    return list;
  }
  buyChar(char, isCharCreate=false) {
    if (!isCharCreate) {return;}
    let currVal = this.getCharVal(char);
    if (currVal >= 5) {return;}
    const cost = 10 * (currVal + 1);
    if (this.spendExperience(cost)) {
      //console.log("Purchased",char,"for",cost,"exp. Remaining Exp:",this.experience);
      this.setCharVal(char, currVal + 1, isCharCreate);
      this.refresh();
    }
  }
  refundChar(char, isCharCreate=false) {
    if (!isCharCreate) {return;}
    let currVal = this.getCharVal(char);
    if (currVal <= Species.get_base_characteristic(this.species, char)) {return;}
    const cost = 10 * currVal;
    this.setCharVal(char, currVal - 1, isCharCreate);
    this.refundExperience(cost);
    //console.log("Refunded",char,"for",cost,"exp. Remaining Exp:",this.experience);
    this.refresh();
  }
  buyRank(skill, isCharCreate=false) {
    const current_rank = this.getSkillRank(skill)
    if (current_rank > 1 && isCharCreate) {return;}
    let cost = 5 * (current_rank + 1);
    if (!this.isCareerSkill(skill)) {cost += 5};
    if (this.spendExperience(cost)) {
      this.setSkillRank(skill, current_rank + 1);
      //console.log("Purchased",skill,"for",cost,"exp. Remaining Exp:",this.experience);
    }
    this.refresh();
  }
  refundRank(skill) {
    const current_rank = this.getSkillRank(skill)
    if (current_rank < 1) {return;}
    let cost = 5 * current_rank;
    if (!this.isCareerSkill(skill)) {cost += 5};
    this.setSkillRank(skill, current_rank - 1);
    this.refundExperience(cost);
    //console.log("Refunded",skill,"for",cost,"exp. Remaining Exp:",this.experience);
    this.refresh();
  }
  buyTalent(talent) {
    if (!Talents.isValid(talent)) {return;}
    this.addTalent(talent);
    this.refresh();
  }
  refundTalent(talent) {
    if (!Talents.isValid(talent)) {return;}
    this.removeTalent(talent);
    this.refresh();
  }
  setCareer(career) {
    if (!Careers.isValid(career)) {return;}
    this.career = career;
    for (const skill of Skills.all_skills) {this.setCareerSkill(skill, false);}
    for (const skill of Careers.getSkillList(career)) {this.setCareerSkill(skill, true);}
    this.refresh();
  }
  addSpecialization(spec) {
    if (!Careers.isValid(spec)) {return;}
    if (this.specializations.hasOwnProperty(spec)) {return;}
    this.specializations[spec] = true;
    for (const skill of Careers.getSkillList(spec)) {this.setCareerSkill(skill, true);}
    this.refresh();
  }
  removeSpecialization(spec) {
    if (!Careers.isValid(spec)) {return;}
    if (!this.specializations.hasOwnProperty(spec)) {return;}
    this.specializations[spec] = false;
    this.setCareer(this.career);
    for (const specialization of this.specializations) {this.addSpecialization(specialization);}
    //what about cases where a career or another spec also gives these career skills?
    this.refresh();
  }
  spendExperience(cost) {
    if (this.experience < cost) {return false;}
    else {this.experience -= cost; return true;}
  }
  addExperience(amount) {this.experience += amount; this.refresh();}
  lowerExperience(amount) {this.experience -= amount; this.refresh();}
  refundExperience(cost) {this.experience += cost;}
  setArmor(armor) {
    this.armor = armor;
    this.refresh();
  }
  addWeapon(weapon) {this.weapons[weapon] = 1; this.refresh();}
  removeWeapon(weapon_id) {delete this.weapons[weapon_id]; this.refresh();}
  getWeapons() {
    let list = [];
    for (const weapon in this.weapons) {list.push(weapon);}
    return list;
  }
}
