import * as Skills from "./skills.js"

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

export class Bothan extends Base {
  constructor(brawn = 1, agility = 2, intellect = 2, cunning = 3, willpower = 2, presence = 2) {
    super();
    this.brawn = brawn;
    this.agility = agility;
    this.intellect = intellect;
    this.cunning = cunning;
    this.willpower = willpower;
    this.presence = presence;
    this.init();
    this.addSkill("streetwise");
    this.addTalent("convincing_demeanor");
  }
}

export class Droid extends Base {
  constructor(brawn = 1, agility = 1, intellect = 1, cunning = 1, willpower = 1, presence = 1) {
    super();
    this.brawn = brawn;
    this.agility = agility;
    this.intellect = intellect;
    this.cunning = cunning;
    this.willpower = willpower;
    this.presence = presence;
    this.init();
  }
  addStartingExperience() {this.experience = 175}
}

export class Duros extends Base {
  constructor(brawn = 1, agility = 2, intellect = 3, cunning = 2, willpower = 2, presence = 2) {
    super();
    this.brawn = brawn;
    this.agility = agility;
    this.intellect = intellect;
    this.cunning = cunning;
    this.willpower = willpower;
    this.presence = presence;
    this.init();
    this.addSkill("piloting_space");
  }
  calcBaseWoundThreshold(){this.base_wounds_threshold = 11 + this.brawn;}
}

export class Gran extends Base {
  constructor(brawn = 2, agility = 2, intellect = 2, cunning = 1, willpower = 2, presence = 3) {
    super();
    this.brawn = brawn;
    this.agility = agility;
    this.intellect = intellect;
    this.cunning = cunning;
    this.willpower = willpower;
    this.presence = presence;
    this.init();
    this.addSkill("charm");
    this.addSkill("negotiation");
  }
  calcBaseStrainThreshold() {this.base_strain_threshold = 9 + this.willpower;}
}

export class Human extends Base {
  constructor(brawn = 2, agility = 2, intellect = 2, cunning = 2, willpower = 2, presence = 2) {
    super();
    this.brawn = brawn;
    this.agility = agility;
    this.intellect = intellect;
    this.cunning = cunning;
    this.willpower = willpower;
    this.presence = presence;
    this.init();
  }
  addStartingExperience() {this.experience = 110}
}

export class Ithorians extends Base {
  constructor(brawn = 2, agility = 1, intellect = 2, cunning = 2, willpower = 3, presence = 2) {
    super();
    this.brawn = brawn;
    this.agility = agility;
    this.intellect = intellect;
    this.cunning = cunning;
    this.willpower = willpower;
    this.presence = presence;
    this.init();
    this.addSkill("survival");
  }
  calcBaseWoundThreshold(){this.base_wounds_threshold = 9 + this.brawn;}
  calcBaseStrainThreshold() {this.base_strain_threshold = 12 + this.willpower;}
  addStartingExperience() {this.experience = 90}
}

export class Mon_Calamari extends Base {
  constructor(brawn = 2, agility = 2, intellect = 3, cunning = 1, willpower = 2, presence = 2) {
    super();
    this.brawn = brawn;
    this.agility = agility;
    this.intellect = intellect;
    this.cunning = cunning;
    this.willpower = willpower;
    this.presence = presence;
    this.init();
    this.addSkill("education");
  }
}

export class Sullustan extends Base {
  constructor(brawn = 2, agility = 3, intellect = 2, cunning = 1, willpower = 2, presence = 2) {
    super();
    this.brawn = brawn;
    this.agility = agility;
    this.intellect = intellect;
    this.cunning = cunning;
    this.willpower = willpower;
    this.presence = presence;
    this.init();
    this.addSkill("astrogation");
    this.addTalent("skilled_jockey");
  }
}