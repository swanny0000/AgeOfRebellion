class Character {
  constructor(){
    this.brawn = 1;
    this.agility = 1;
    this.intellect = 1;
    this.cunning = 1;
    this.willpower = 1;
    this.presence = 1;
    this.wound_threshold_base = 10;
    this.strain_threshold_base = 10;
    this.astrogation = 0;
    this.athletics = 0;
    this.charm = 0;
    this.coercion = 0;
    this.computers = 0;
    this.cool = 0;
    this.coordination = 0;
    this.deception = 0;
    this.discipline = 0;
    this.leadership = 0;
    this.mechanics = 0;
    this.medicine = 0;
    this.negotiation = 0;
    this.perception = 0;
    this.piloting_planetary = 0;
    this.piloting_space = 0;
    this.resilience = 0;
    this.skulduggery = 0;
    this.stealth = 0;
    this.streetwise = 0;
    this.survival = 0;
    this.vigilance = 0;
    this.brawl = 0;
    this.gunnery = 0;
    this.melee = 0;
    this.ranged_light = 0;
    this.ranged_heavy = 0;
    this.core_worlds = 0;
    this.education = 0;
    this.lore = 0;
    this.outer_rim = 0;
    this.underworld = 0;
    this.warfare = 0;
    this.xenology = 0;
    this.career_skills = [];
  }
  rank_up_skill(skill) {
    if (this[skill] < 6) {
      this[skill] += 1;
      return true;
    } else {return false;}
  }
  add_career_skill(skill) {
    if (this.career_skills.includes(skill)) {
      return true;
    } else {
      this.career_skills.push(skill)
    }
  }
  add_damage(damage, reduce_soak_amt){
    if (reduce_soak_amt > this.soak) {
      total_damage = damage;
    } else {
      total_damage = math.max(damage - (this.soak - reduce_soak_amt), 0);
    }
    this.wounds += total_damage;
    this.evaluate_wounds();
  }
  evaluate_wounds(){} //TO IMPLEMENT
}

class Rodian extends Character {
  constructor(){
    this.species = "Rodian";
    this.brawn = 2;
    this.agility = 2;
    this.intellect = 3;
    this.cunning = 2;
    this.willpower = 1;
    this.presence = 2;
    this.exp = 100;
    this.special_abilities_text = "Rodians begin the game with one rank in Survival. They may not train Survival above rank 2 during character creation. Rodians start with one rank in the Expert Tracker talent.";
    this.add_ability("Expert Tracker", 1);
    this.rank_up_skill("survival")
  }
}

class Bothan extends Character {
  constructor(){
    this.species = "Bothan";
    this.brawn = 1;
    this.agility = 3;
    this.intellect = 2;
    this.cunning = 3;
    this.willpower = 3;
    this.presence = 3;
    this.exp = 100;
  }
}

class Duros extends Character {
  constructor() {
    this.species = "Duros";
    this.brawn = 1;
    this.agility = 1;
    this.intellect = 1;
    this.cunning = 1;
    this.willpower = 1;
    this.presence = 1;
    this.exp = 100;
  }
}