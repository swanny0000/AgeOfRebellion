export const Specializations = {
  specializations: {
    Driver: { career: "Ace", skill_list: ["Cool", "Gunnery", "Mechanics", "Piloting (Planetary)"], text: "" },
    Gunner: { career: "Ace", skill_list: ["Discipline", "Gunnery", "Ranged (Heavy)", "Resilience"], text: "" },
    Pilot: { career: "Ace", skill_list: ["Astrogation", "Gunnery", "Piloting (Planetary)", "Piloting (Space)"], text: "" },
    Commodore: { career: "Commander", skill_list: ["Astrogation", "Computers", "Education", "Outer Rim"], text: "" },
    "Squadron Leader": { career: "Commander", skill_list: ["Gunnery", "Mechanics", "Piloting (Planetary)", "Piloting (Space)"], text: "" },
    Tactician: { career: "Commander", skill_list: ["Brawl", "Discipline", "Leadership", "Ranged (Heavy)"], text: "" },
    Ambassador: { career: "Diplomat", skill_list: ["Charm", "Discipline", "Core Worlds", "Negotiation"], text: "" },
    Agitator: { career: "Diplomat", skill_list: ["Coercion", "Deception", "Underworld", "Streetwise"], text: "" },
    Quartermaster: { career: "Diplomat", skill_list: ["Computers", "Negotiation", "Skulduggery", "Vigilance"], text: "" },
    Mechanic: { career: "Engineer", skill_list: ["Brawl", "Mechanics", "Piloting (Space)", "Skulduggery"], text: "" },
    Saboteur: { career: "Engineer", skill_list: ["Coordination", "Mechanics", "Skulduggery", "Stealth"], text: "" },
    Scientist: { career: "Engineer", skill_list: ["Computers", "Education", "Lore", "Medicine"], text: "" },
    Commando: { career: "Soldier", skill_list: ["Brawl", "Melee", "Resilience", "Survival"], text: "" },
    Medic: { career: "Soldier", skill_list: ["Xenology", "Medicine", "Resilience", "Survival"], text: "" },
    Sharpshooter: { career: "Soldier", skill_list: ["Cool", "Perception", "Ranged (Heavy)", "Ranged (Light)"], text: "" },
    Infiltrator: { career: "Spy", skill_list: ["Deception", "Melee", "Skulduggery", "Streetwise"], text: "" },
    Scout: { career: "Spy", skill_list: ["Athletics", "Medicine", "Piloting (Planetary)", "Survival"], text: "" },
    Slicer: { career: "Spy", skill_list: ["Computers", "Education", "Underworld", "Stealth"], text: "" },
    Recruit: { career: "", skill_list: [], text: "" }
  },
  isValid: function(spec) {return this.specializations.hasOwnProperty(spec);},
  getSkillList: function(spec) {
    let list = [];
    for (const skill of this.specializations[spec].skill_list) {list.push(skill);}
    return list;
  },
  getText(spec) {return this.specializations[spec].text;}
}