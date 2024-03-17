export const Careers = {
  careers: {
    Ace: {
      skill_list: ["Astrogation", "Cool", "Gunnery", "Mechanics", "Perception", "Piloting (Planetary)", "Piloting (Space)", "Ranged (Light)"],
      specializations: ["Driver", "Gunner", "Pilot"]
    },
    Commander: {
      skill_list: ["Coercion", "Cool", "Discipline", "Warfare", "Leadership", "Perception", "Ranged (Light)", "Vigilance"],
      specializations: ["Commodore", "Squadron Leader", "Tactician"]
    },
    Diplomat: {
      skill_list: ["Charm", "Deception", "Core Worlds", "Lore", "Outer Rim", "Xenology", "Leadership", "Negotiation"],
      specializations: ["Ambassador", "Agitator", "Quartermaster"]
    },
    Engineer: {
      skill_list: ["Athletics", "Computers", "Education", "Mechanics", "Perception", "Piloting (Space)", "Ranged (Light)", "Vigilance"],
      specializations: ["Mechanic", "Saboteur", "Scientist"]
    },
    Soldier: {
      skill_list: ["Athletics", "Brawl", "Warfare", "Medicine", "Melee", "Ranged (Light)", "Ranged (Heavy)", "Survival"],
      specializations: ["Commando", "Medic", "Sharpshooter"]
    },
    Spy: {
      skill_list: ["Computers", "Cool", "Coordination", "Deception", "Warfare", "Perception", "Skulduggery", "Stealth"],
      specializations: ["Infiltrator", "Scout", "Slicer"]
    }
  },
  isValid: function(career) {{return this.careers.hasOwnProperty(career);}},
  getSkillList: function(career) {return this.careers[career].skill_list;},
  getCareerSpecializations: function(career) {return this.careers[career].specializations;},
  get list_all() {var list = []; for (const career in this.careers) {list.push(career);} return list;}
}
