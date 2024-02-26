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
    for (var characteristic in this.base_characteristics) {list.push(characteristic);}
    return list;
  },
  get list_derived() {
    var list = [];
    for (var characteristic in this.derived_characteristics) {list.push(characteristic);}
    return list;
  },
  get list_threshold() {
    var list = [];
    for (var characteristic in this.base_threshold_characteristics) {list.push(characteristic);}
    return list;
  }
  ,
  get list_all() {
    var list = [];
    for (var characteristic in this.base_characteristics) {list.push(characteristic);}
    for (var characteristic in this.derived_characteristics) {list.push(characteristic);}
    return list;
  }
}

import { Skills } from "./skills.js";
import { Talents } from "./talents.js";
import { Species } from "./species.js";

export const Character = {
  skills: {}, talents: {}, weapons: {}, armor: {}, gear: {},
  init: function() {this.setSpecies("Bothan")},
  setSpecies: function(species) {
    //create skills and talents nodes
    for (var skill of  Skills.all_skills) {this[skill] = this.createSkillObj;}
    for (var talent of Talents.all_talents) {this[talent = this.createTalentObj];}
    this.Species = species;
    //create characteristics nodes
    for (var characteristic in Characteristics.base_characteristics) {
      this[characteristic] = Species.get_base_characteristic(this.Species, characteristic);
    }
    this.setBaseWoundsThreshold(Species.calcBaseWoundsThreshold(this));
    this.setBaseStrainThreshold(Species.calcBaseStrainThreshold(this));
    this.calulateDerivedCharacteristics();
  },
  get createSkillObj() {return {rank: 0, career:false};},
  createTalentObj: function(talent) {},
  setBaseWoundsThreshold: function(wounds) {
    if (Number.isInteger(wounds)) {this.setVal("Base Wounds Threshold", wounds);}
  },
  setBaseStrainThreshold: function(strain) {
    if (Number.isInteger(strain)) {this.setVal("Base Strain Threshold", strain);}
  },
  calulateDerivedCharacteristics: function() {
    //soak
    this.setVal("Soak", 0);
    //wounds threshold
    this.setVal("Wounds Threshold", this.getVal("Base Wounds Threshold"))
    //strain threshold
    this.setVal("Strain Threshold", this.getVal("Base Strain Threshold"))
    //ranged defense
    //melee defense
  },
  setVal: function(characteristic, value) {{this[characteristic] = value;}},
  getVal: function(characteristic) {return this[characteristic];},
  raiseRank: function(skill) {
    if (this[skill] === undefined) {this[skill] = this.createSkillObj;}
    if (this[skill].rank < 5) {this[skill].rank += 1;}
  },
  lowerRank: function(skill) {
    if (this[skill] === undefined) {this[skill] = this.createSkillObj;}
    else if (this[skill].rank > 0) {this[skill].rank -= 1;}
  },
  getRank: function(skill) {
    if (this[skill] === undefined) {this[skill] = this.createSkillObj;}
    if (Number.isInteger(this[skill])) {return this[skill];}
    else {return 0;}
  },
  addCareer: function(career) {},
  addSpecialization: function(Specialization) {},
  addTalent: function(talent) {},
  removeTalent: function(talent) {}
}
