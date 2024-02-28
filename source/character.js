export const Characteristics = {
  base_characteristics: {
    Brawn: {description: "", page_aoe: 23},
    Agility: {description: "", page_aoe: 23},
    Intellect: {description: "", page_aoe: 23},
    Cunning: {description: "", page_aoe: 23},
    Willpower: {description: "", page_aoe: 23},
    Presence: {description: "", page_aoe: 23}
  },
  derived_characteristics: {
    Soak: {description: "", page_aoe: 221},
    "Wounds Threshold": {description: "", page_aoe: 229},
    "Strain Threshold": {description: "", page_aoe: 229},
    "Defense (Ranged)": {description: "", page_aoe: 220},
    "Defense (Melee)": {description: "", page_aoe: 220}
  },
  base_threshold_characteristics: {
    "Base Wounds Threshold": {description: "", page_aoe: 0},
    "Base Strain Threshold": {description: "", page_aoe: 0}
  },
  get list_base() {
    var list = [];
    for (const characteristic in this.base_characteristics) {list.push(characteristic);}
    return list;
  },
  get list_derived() {
    var list = [];
    for (const characteristic in this.derived_characteristics) {list.push(characteristic);}
    return list;
  },
  get list_threshold() {
    var list = [];
    for (const characteristic in this.base_threshold_characteristics) {list.push(characteristic);}
    return list;
  }
  ,
  get list_all() {
    var list = [];
    for (const characteristic in this.base_characteristics) {list.push(characteristic);}
    for (const characteristic in this.derived_characteristics) {list.push(characteristic);}
    return list;
  }
}

import { Skills } from "./skills.js";
import { Talents } from "./talents.js";
import { Species } from "./species.js";
import { Armor } from "./armor.js";
import { Careers } from "./careers.js";

export const Character = {
  skills: {
    init: function(skill) {this[skill] = {rank: 0, career: false};},
    getRank: function(skill) {return this[skill].rank},
    setRank: function(skill, value) {this[skill].rank = value;},
    addRank: function(skill) {if (this[skill].rank < 5) {this.setRank(skill, this.getRank(skill) + 1);}},
    subtractRank: function(skill) {if (this[skill].rank > 0) {this.setRank(skill, this.getRank(skill) - 1);}},
    isCareer: function(skill) {return this[skill].career;},
    setCareer: function(skill, isCareer = true) {this[skill].career = isCareer;}
  },
  talents: {
    init: function(talent) {this[talent] = {rank: 1};},
    addTalent: function(talent) {
      if (!Object.hasOwnProperty(this, talent)) {this.init(talent);}
      else if (Talents.isRanked(talent)) {this.addRank(talent);}
    },
    addRank: function(talent) {
      if (!Object.hasOwnProperty(this, talent)) {return;}
      else if (Talents.isRanked(talent)) {this[talent].rank += 1;}
    },
    removeRank: function(talent) {
      if (!Object.hasOwnProperty(this, talent)) {return;}
      else if (Talents.isRanked(talent)) {this[talent].rank -= 1;}
    },
    getRank: function(talent) {
      if (!Object.hasOwnProperty(this, talent)) {return 0;}
      else {return this[talent].rank;}
    },
    delete: function(talent) {delete this[talent];}
  },
  characteristics: {
    setVal: function(characteristic, value) {this[characteristic] = value;},
    getVal: function(characteristic) {return this[characteristic];}
  },
  Armor: "",
  init: function() {this.setSpecies()},
  setSpecies: function(species="Bothan") {
    this.Species = species;
    //create characteristics nodes
    for (const characteristic of Characteristics.list_base) {
      this.setVal(characteristic, Species.get_base_characteristic(this.Species, characteristic) );
    }
    this.setBaseWoundsThreshold(Species.calcBaseWoundsThreshold(this));
    this.setBaseStrainThreshold(Species.calcBaseStrainThreshold(this));
    this.calulateDerivedCharacteristics();
    //create skills and talents nodes
    for (const skill of Skills.all_skills) {this.skills.init(skill);}
    if (Species.hasStartingSkills(this.Species)) {
      for (const skill of Species.starting_skills(this.Species)) {this.raiseRank(skill);}
    }
    if (Species.hasStartingTalents(this.Species)) {
      for (const talent of Species.starting_talents(this.Species)) {this.talents.init(talent);}
    this.experience = Species.getStartingExperience(this.Species);
    }
  },
  setBaseWoundsThreshold: function(wounds) {
    if (Number.isInteger(wounds)) {this.characteristics.setVal("Base Wounds Threshold", wounds);}
  },
  setBaseStrainThreshold: function(strain) {
    if (Number.isInteger(strain)) {this.characteristics.setVal("Base Strain Threshold", strain);}
  },
  calulateDerivedCharacteristics: function() {
    this.setVal("Soak", Armor.getArmorSoak(this.Armor) + this.getVal("Brawn"));
    this.setVal("Wounds Threshold", this.getVal("Base Wounds Threshold"));
    this.setVal("Strain Threshold", this.getVal("Base Strain Threshold"));
    this.setVal("Defense (Ranged)", Armor.getArmorDefense(this.Armor));
    this.setVal("Defense (Melee)", Armor.getArmorDefense(this.Armor));
  },
  setVal: function(element, value) {
    if (Characteristics.list_all.includes(element)) {this.characteristics.setVal(element, value);}
  },
  getVal: function(element) {
    if (Characteristics.list_all.includes(element)) {return this.characteristics.getVal(element);}
    else if (Characteristics.list_threshold.includes(element)) {return this.characteristics.getVal(element);}
    else {return 0;}
  },
  raiseRank: function(element) {
    if (Skills.all_skills.includes(element)) {this.skills.addRank(element);}
    else if (Talents.ranked_talents.includes(element)) {this.talents.addRank(element);}
  },
  lowerRank: function(element) {
    if (Skills.all_skills.includes(element)) {this.skills.subtractRank(element);}
    else if (Talents.ranked_talents.includes(element)) {this.talents.subtractRank(element);}
  },
  getRank: function(element) {
    if (Skills.all_skills.includes(element)) {return this.skills.getRank(element);}
    else if (Talents.ranked_talents.includes(element)) {return this.talents.getRank(element);}
  },
  isCareer: function(skill) {
    if (Skills.all_skills.includes(skill)) {return this.skills.isCareer(skill);}
  },
  addTalent: function(talent) {this.talents.addTalent(talent);},
  removeTalent: function(talent) {this.talents.delete(talent);},
  get active_talents() {
    var list = [];
    for (const talent in this.talents) {list.push(talent);}
    return list;
  },
  refresh: function() {
    this.calulateDerivedCharacteristics();
  },
  addCareer: function(career) {
    for (var skill of Careers.getSkillList(career)) {this.skills.setCareer(skill);}
  },
  addSpecialization: function(specialization) {
    for (var skill of Careers.getSkillList(specialization)) {this.skills.setCareer(skill);}
  },
  spendExperience: function(cost) {
    if (this.experience < cost) {return false;}
    else {this.experience -= cost; return true;}
  },
  purchaseCharacteristicIncrease: function(characteristic, isCharacterCreation=false) {
    if (!isCharacterCreation) {return false;}
    const current_val = this.getVal(characteristic);
    const cost = 10 * (current_val + 1);
    if (this.spendExperience(cost)) {
      this.setVal(characteristic, current_val + 1);
      return true;
    } else {return false;}
  },
  purchaseSkillRankIncrease: function(skill, isCharacterCreation=false) {
    const current_rank = this.getRank(skill);
    if (current_rank > 1 && isCharacterCreation) {return false;}
    const cost = 5 * (current_rank + 1);
    if (!this.isCareer(skill)) {cost += 5};
    if (this.spendExperience(cost)) {
      this.raiseRank(skill);
      return true;
    } else {return false;}
  },
  purchaseTalent: function(talent) {},
  purchaseSpecialization: function(specialization) {}
}