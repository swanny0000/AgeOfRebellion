export const Skills = {
  skills: {
    astrogation: {charateristic: "intellect", type: "general", page_aoe: 116},
    athletics: {characteristic: "brawn", type:"general", page_aoe:117},
    brawl: {characteristic: "brawn", type:"combat", page_aoe:131},
    charm: {characteristic: "presence", type:"general", page_aoe:117},
    coercion: {characteristic: "willpower", type:"general", page_aoe:118},
    computers: {characteristic: "intellect", type:"general", page_aoe:119},
    cool: {characteristic: "presence", type:"general", page_aoe:120},
    coordination: {characteristic: "agility", type:"general", page_aoe:121},
    core_worlds: {characteristic: "intellect", type:"knowledge", page_aoe:134},
    deception: {characteristic: "cunning", type:"general", page_aoe:121},
    discipline: {characteristic: "willpower", type:"general", page_aoe:122},
    education: {characteristic: "intellect", type:"knowledge", page_aoe:135},
    gunnery: {characteristic: "agility", type:"combat", page_aoe:131},
    leadership: {characteristic: "presence", type:"general", page_aoe:123},
    lore: {characteristic: "intellect", type:"knowledge", page_aoe:135},
    mechanics: {characteristic: "intellect", type:"general", page_aoe:124},
    medicine: {characteristic: "intellect", type:"general", page_aoe:125},
    melee: {characteristic: "brawn", type:"combat", page_aoe:133},
    negotiation: {characteristic: "presence", type:"general", page_aoe:125},
    outer_rim: {characteristic: "intellect", type:"knowledge", page_aoe:135},
    perception: {characteristic: "cunning", type:"general", page_aoe:126},
    piloting_planetary: {characteristic: "agility", type:"general", page_aoe:126},
    piloting_space: {characteristic: "agility", type:"general", page_aoe:127},
    ranged_heavy: {characteristic: "agility", type:"combat", page_aoe:133},
    ranged_light: {characteristic: "agility", type:"combat", page_aoe:133},
    resilience: {characteristic: "brawn", type:"general", page_aoe:127},
    skulduggery: {characteristic: "cunning", type:"general", page_aoe:128},
    stealth: {characteristic: "agility", type:"general", page_aoe:128},
    streetwise: {characteristic: "cunning", type:"general", page_aoe:130},
    survival: {characteristic: "cunning", type:"general", page_aoe:130},
    underworld: {characteristic: "intellect", type:"knowledge", page_aoe:136},
    vigilance: {characteristic: "willpower", type:"general", page_aoe:130},
    warfare: {characteristic: "intellect", type:"knowledge", page_aoe:136},
    xenology: {characteristic: "intellect", type:"knowledge", page_aoe:137}
  },
  get allSkills() {
    var list = [];
    for (var skill in this.skills) {list.push(skill);}
    return list;
  },
  skillsOfType: function(type) {
    var list = [];
    for (var skill in this.skills) {if (this.skills[skill].type == "type") {list.push(skill);}}
    return list;
  },
  get general_skills() {return this.skillsOfType("general");},
  get knowledge_skills() {return this.skillsOfType("knowledge");},
  get combat_skills() {return this.skillsOfType("combat");}
}

