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
  get base_characteristics() {
    var charList = [];
    for (var characteristic in Object.keys(this.base_characteristics)) {
      console.out(characteristic);
      charList.push(characteristic);}
    return charList;
  },
  get derived_characteristics() {
    var charList = [];
    for (var characteristic in this.derived_characteristics) {charList.push(characteristic);}
    return charList;
  }
}

import { Skills } from "./skills.js";
import { Talents } from "./talents.js";

export const Character = {
  /* 
  characteristics: {brawn: 1, agility: 1, intellect: 1, cunning: 1, willpower: 1, presence: 1,
    soak: 0, base_wounds_threshold:0, base_strain_threshold: 0, },
  experience: 0,
  
    skills: {
    astrogation: {rank: 0, career: false},
    athletics: {rank: 0, career: false},
    brawl: {rank: 0, career: false},        
    charm: {rank: 0, career: false},
    coercion: {rank: 0, career: false},           
    computers: {rank: 0, career: false},          
    cool: {rank: 0, career: false},               
    coordination: {rank: 0, career: false},       
    core_worlds: {rank: 0, career: false},        
    deception: {rank: 0, career: false},          
    discipline: {rank: 0, career: false},         
    education: {rank: 0, career: false},        
    gunnery: {rank: 0, career: false},       
    leadership: {rank: 0, career: false},      
    lore: {rank: 0, career: false},     
    mechanics: {rank: 0, career: false},    
    medicine: {rank: 0, career: false},   
    melee: {rank: 0, career: false},  
    negotiation: {rank: 0, career: false}, 
    outer_rim: {rank: 0, career: false},
    perception: {rank: 0, career: false},
    piloting_planetary: {rank: 0, career: false},
    piloting_space: {rank: 0, career: false},
    ranged_heavy: {rank: 0, career: false},
    ranged_light: {rank: 0, career: false},
    resilience: {rank: 0, career: false},
    skulduggery: {rank: 0, career: false},
    stealth: {rank: 0, career: false},
    streetwise: {rank: 0, career: false},
    survival: {rank: 0, career: false},
    underworld: {rank: 0, career: false},
    vigilance: {rank: 0, career: false},
    warfare: {rank: 0, career: false},
    xenology: {rank: 0, career: false}
  },
  */
  initializeCharacter: function() {
    //create characteristics nodes
    console.out("setting base chars");
    for (var characteristic of Characteristics.base_characteristics) {this[characteristic] = 1;}
    console.out("setting derived chars");
    for (var characteristic of Characteristics.derived_characteristics) {this[characteristic] = 0;}
    this.editBaseThresholds(10, 10);
    //create skills and talents nodes
    this.skills = {};
    this.talents = {};
    this.experience = 0;
    //create weapons, gear, and armor nodes
    this.weapons = {};
    this.armor = {};
    this.gear = {}
  },
  skills: {
    getNewRankObject: function() {return {rank: 0, career:false}},
    raiseRank: function(skill) {
      if (this[skill] === undefined) {this[skill]= {rank: 0, career:false};}
      if (this[skill].rank < 5) {this[skill].rank += 1;}
    },
    lowerRank: function(skill) {
      if (this[skill] === undefined) {this[skill]= {rank: 0, career:false};}
      else if (this.skills[skill].rank > 0) {this.skills[skill].rank -= 1;}
    },
    getRank: function(skill) {
      if (this[skill] === undefined) {this[skill]= {rank: 0, career:false};}
      if (Number.isInteger(this.skills[skill])) {return this.skills[skill];}
      else {return 0;}
    }
  },
  characteristics: {
    setVal: function(characteristic, value, threshold=false) {
      if (["Base Wound Threshold", "Base Strain Threshold"].includes(characteristic)) {return;}
      else {this.characteristics[characteristic] = value;}
    },
    getVal: function(characteristic) {return this.characteristics[characteristic];},
    editBaseThresholds: function(wounds, strain) {
      if (Number.isInteger(wounds)) {this.setCharacteristic("Wound Threshold", wounds);}
      if (Number.isInteger(strain)) {this.setCharacteristic("Strain Threshold", strain);}
    },
    reevaluate: {
      soak: function() {
        var soak = this.characteristic.get("Brawn");
        this.characteristics.setVal("Soak", soak);
      },
      wounds_threshold: function() {
        var wounds_threshold = this.characteristic.getVal("Base Wound Threshold");
        this.characteristic.setVal("Wound Threshold", wounds_threshold)
      },
      strain_threshold: function() {
        var wounds_threshold = this.characteristic.getVal("Base Strain Threshold");
        this.characteristic.setVal("Strain Threshold", strain_threshold)
      },
      defense_ranged: function() {},
      defense_melee: function() {}
    }
  },
  talents: {
    addTalent: function(talent) {},
    removeTalent: function(talent) {},
  } 
}
