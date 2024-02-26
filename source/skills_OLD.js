export const base_skill_list = ["astrogation","athletics","charm","coercion","computers","cool","coordination","deception","discipline","leadership","mechanics","medicine","negotiation","perception","piloting_planetary","piloting_space","resilience","skulduggery","stealth", "streetwise", "survival","vigilance", "brawl", "gunnery", "melee", "ranged_light", "ranged_heavy", "core_worlds", "education", "lore", "outer_rim", "underworld", "warfare", "xenology"];
export const custom_skill_list = [ "other_knowledge", "custom_skill_1", "custom_skill_2", "custom_skill_3", "custom_skill_4", "custom_skill_5"];

class skill {
  constructor(characteristic, type, page_aoe = 0) {
    this.associated_characteristic = characteristic;
    this.type = type;
    this.page_aoe = page_aoe;
  }
}

export const astrogation = new skill("intellect", "general", 116);
export const athletics = new skill("brawn", "general", 117);
export const brawl = new skill("brawn", "combat", 131);
export const charm = new skill("presence", "general", 117);
export const coercion = new skill("willpower", "general", 118);
export const computers = new skill("intellect", "general", 119);
export const cool = new skill("presence", "general", 120);
export const coordination = new skill("agility", "general", 121);
export const core_worlds = new skill("intellect", "knowledge", 134);
export const deception = new skill("cunning", "general", 121);
export const discipline = new skill("willpower", "general", 122);
export const education = new skill("intellect", "knowledge", 135);
export const gunnery = new skill("agility", "combat", 131);
export const leadership = new skill("presence", "general", 123);
export const lore = new skill("intellect", "knowledge", 135);
export const mechanics = new skill("intellect", "general", 124);
export const medicine = new skill("intellect", "general", 125);
export const melee = new skill("brawn", "combat", 133);
export const negotiation = new skill("presence", "general", 125);
export const outer_rim = new skill("intellect", "knowledge", 135);
export const perception = new skill("cunning", "general", 126);
export const piloting_planetary = new skill("agility", "general", 126);
export const piloting_space = new skill("agility", "general", 127);
export const ranged_heavy = new skill("agility", "combat", 133);
export const ranged_light = new skill("agility", "combat", 133);
export const resilience = new skill("brawn", "general", 127);
export const skulduggery = new skill("cunning", "general", 128);
export const stealth = new skill("agility", "general", 128);
export const streetwise = new skill("cunning", "general", 130);
export const survival = new skill("cunning", "general", 130);
export const underworld = new skill("intellect", "knowledge", 136);
export const vigilance = new skill("willpower", "general", 130);
export const warfare = new skill("intellect", "knowledge", 136);
export const xenology = new skill("intellect", "knowledge", 137);