export const Skills = {
  skills: {
    Astrogation: {characteristic: "Intellect", type: "General", page_aoe: 116},
    Athletics: {characteristic: "Brawn", type:"General", page_aoe:117},
    Brawl: {characteristic: "Brawn", type:"Combat", page_aoe:131},
    Charm: {characteristic: "Presence", type:"General", page_aoe:117},
    Coercion: {characteristic: "Willpower", type:"General", page_aoe:118},
    Computers: {characteristic: "Intellect", type:"General", page_aoe:119},
    Cool: {characteristic: "Presence", type:"General", page_aoe:120},
    Coordination: {characteristic: "Agility", type:"General", page_aoe:121},
    "Core Worlds": {characteristic: "Intellect", type:"Knowledge", page_aoe:134},
    Deception: {characteristic: "Cunning", type:"General", page_aoe:121},
    Discipline: {characteristic: "Willpower", type:"General", page_aoe:122},
    Education: {characteristic: "Intellect", type:"Knowledge", page_aoe:135},
    Gunnery: {characteristic: "Agility", type:"Combat", page_aoe:131},
    Leadership: {characteristic: "Presence", type:"General", page_aoe:123},
    Lightsaber: {characteristic: "Brawn", type:"Combat", page_aoe:0},
    Lore: {characteristic: "Intellect", type:"Knowledge", page_aoe:135},
    Mechanics: {characteristic: "Intellect", type:"General", page_aoe:124},
    Medicine: {characteristic: "Intellect", type:"General", page_aoe:125},
    Melee: {characteristic: "Brawn", type:"Combat", page_aoe:133},
    Negotiation: {characteristic: "Presence", type:"General", page_aoe:125},
    "Outer Rim": {characteristic: "Intellect", type:"Knowledge", page_aoe:135},
    Perception: {characteristic: "Cunning", type:"General", page_aoe:126},
    "Piloting (Planetary)": {characteristic: "Agility", type:"General", page_aoe:126},
    "Piloting (Space)": {characteristic: "Agility", type:"General", page_aoe:127},
    "Ranged (Heavy)": {characteristic: "Agility", type:"Combat", page_aoe:133},
    "Ranged (Light)": {characteristic: "Agility", type:"Combat", page_aoe:133},
    Resilience: {characteristic: "Brawn", type:"General", page_aoe:127},
    Skulduggery: {characteristic: "Cunning", type:"General", page_aoe:128},
    Stealth: {characteristic: "Agility", type:"General", page_aoe:128},
    Streetwise: {characteristic: "Cunning", type:"General", page_aoe:130},
    Survival: {characteristic: "Cunning", type:"General", page_aoe:130},
    Underworld: {characteristic: "Intellect", type:"Knowledge", page_aoe:136},
    Vigilance: {characteristic: "Willpower", type:"General", page_aoe:130},
    Warfare: {characteristic: "Intellect", type:"Knowledge", page_aoe:136},
    Xenology: {characteristic: "Intellect", type:"Knowledge", page_aoe:137},
  },
  get all_skills() {
    var list = [];
    for (var skill in this.skills) {list.push(skill);}
    return list;
  },
  skillsOfType: function(type) {
    var list = [];
    for (var skill in this.skills) {
      if (this.skills[skill].type == type) {list.push(skill);}
    }
    return list;
  },
  get General_skills() {return this.skillsOfType("General");},
  get Knowledge_skills() {return this.skillsOfType("Knowledge");},
  get Combat_skills() {return this.skillsOfType("Combat");},
  associated_characteristic: function(skill) {
    return this.skills[skill].characteristic;
  }
}

