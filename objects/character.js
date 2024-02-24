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
    for (var characteristic in this.base_characteristics) {charList.push(characteristic);}
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
  init() {
    //create characteristics nodes
    for (var characteristic of Characteristics.base_characteristics) {this[characteristic] = 1;}
    for (var characteristic of Characteristics.base_characteristics) {this[characteristic] = 0;}
    //create skills nodes
    for (var skill of Skills.allSkills) {
      this[skill] = {rank: 1, career: true};
    }
    //create talents nodes
    
    //create weapons, gear, and armor nodes
    this.weapons = {};
    this.armor = {};
    this.gear = {}
  },
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
  weapons: [],
  talents: [],
  addSkillRank: function(skill) {
    if (this.skills[skill].rank < 5) {this.skills[skill].rank += 1;}
  },
  getSkillRank: function(skill) {
    if (Number.isInteger(this.skills[skill])) {return this.skills[skill];}
    else {return 0;}
  }
}













export class Base {
  constructor(brawn = 1, agility = 1, intellect = 1, cunning = 1, willpower = 1, presence = 1) {
    this.brawn = brawn;
    this.agility = agility;
    this.intellect = intellect;
    this.cunning = cunning;
    this.willpower = willpower;
    this.presence = presence;
    this.init();
  }
  init() {
    this.calcSoak();
    this.calcBaseWoundThreshold();
    this.calcBaseStrainThreshold();
    this.calcWoundThreshold();
    this.calcStrainThreshold();
    this.calcDefRanged();
    this.calcDefMelee();
    this.addStartingExperience();
    this.addSkillNodes();
  }
  addStartingExperience() {this.experience = 100;}
  addSkillNodes() {
    for (var i=0; i<Skills.base_skill_list.length; i++) {
      var skill = "rank_" + Skills.base_skill_list[i];
      var career = "career_" + Skills.base_skill_list[i];
      this[skill] = 0;
      this[career] = false;
    }
  }
  updateCharacteristics() {
    this.calcSoak();
    this.calcWoundThreshold();
    this.calcStrainThreshold();
    this.calcDefRanged();
    this.calcDefMelee();
  }
  calcSoak() {this.soak = this.brawn;}
  calcBaseWoundThreshold(){this.base_wounds_threshold = 10 + this.brawn;}
  calcWoundThreshold(){this.wounds_threshold = this.base_wounds_threshold;}
  calcBaseStrainThreshold(){this.base_strain_threshold = 10 + this.willpower;}
  calcStrainThreshold(){this.strain_threshold = this.base_strain_threshold;}
  calcDefRanged() {this.defense_ranged = 0;}
  calcDefMelee() {this.defense_melee = 0;}
  addSkill(skill) {
    var skill_rank = "rank_" + skill
    if (this[skill_rank] < 5) {
      this[skill_rank] += 1;
    }
  }
  removeSkill(skill) {
    if (this.skills[skill] > 0) {
      this.skills[skill] -= 1;
    }
  }
  addTalent(talent) {
    var talent_rank = "rank_" + talent
    if (this[talent_rank] < 5) {
      this[talent_rank] += 1;
    }
  }
  removeTalent(talent) {
    if (this[talent] > 0) {
      this[talent] -= 1;
    }
  }
}