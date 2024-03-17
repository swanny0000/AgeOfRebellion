export const Specializations = {
  specializations: {
    Driver: { career: "Ace", skill_list: ["Cool", "Gunnery", "Mechanics", "Piloting (Planetary)"] },
    Gunner: { career: "Ace", skill_list: ["Discipline", "Gunnery", "Ranged (Heavy)", "Resilience"] },
    Pilot: { career: "Ace", skill_list: ["Astrogation", "Gunnery", "Piloting (Planetary)", "Piloting (Space)"] },
    Commodore: { career: "Commander", skill_list: ["Astrogation", "Computers", "Education", "Outer Rim"] },
    "Squadron Leader": { career: "Commander", skill_list: ["Gunnery", "Mechanics", "Piloting (Planetary)", "Piloting (Space)"] },
    Tactician: { career: "Commander", skill_list: ["Brawl", "Discipline", "Leadership", "Ranged (Heavy)"] },
    Ambassador: { career: "Diplomat", skill_list: ["Charm", "Discipline", "Core Worlds", "Negotiation"] },
    Agitator: { career: "Diplomat", skill_list: ["Coercion", "Deception", "Underworld", "Streetwise"] },
    Quartermaster: { career: "Diplomat", skill_list: ["Computers", "Negotiation", "Skulduggery", "Vigilance"] },
    Mechanic: { career: "Engineer", skill_list: ["Brawl", "Mechanics", "Piloting (Space)", "Skulduggery"] },
    Saboteur: { career: "Engineer", skill_list: ["Coordination", "Mechanics", "Skulduggery", "Stealth"] },
    Scientist: { career: "Engineer", skill_list: ["Computers", "Education", "Lore", "Medicine"] },
    Commando: { career: "Soldier", skill_list: ["Brawl", "Melee", "Resilience", "Survival"] },
    Medic: { career: "Soldier", skill_list: ["Xenology", "Medicine", "Resilience", "Survival"] },
    Sharpshooter: { career: "Soldier", skill_list: ["Cool", "Perception", "Ranged (Heavy)", "Ranged (Light)"] },
    Infiltrator: { career: "Spy", skill_list: ["Deception", "Melee", "Skulduggery", "Streetwise"] },
    Scout: { career: "Spy", skill_list: ["Athletics", "Medicine", "Piloting (Planetary)", "Survival"] },
    Slicer: { career: "Spy", skill_list: ["Computers", "Education", "Underworld", "Stealth"] },
    Recruit: { career: "", skill_list: [] }
  },
  isValid: function(spec) {return this.specializations.hasOwnProperty(spec);},
  getSkillList: function(spec) {
    let list = [];
    for (const skill of this.specializations[spec].skill_list) {list.push(skill);}
    return list;
  }
}