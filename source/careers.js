export const Careers = {
  careers: {
    Ace: {
      skill_list: ["Astrogation", "Cool", "Gunnery", "Mechanics", "Perception", "Piloting (Planetary)", "Piloting (Space)", "Ranged (Light)"],
      specializations: {
        Driver: {skill_list: ["Cool", "Gunnery", "Mechanics", "Piloting (Planetary)"]},
        Gunner: {skill_list: ["Discipline", "Gunnery", "Ranged (Heavy)", "Resilience"]},
        Pilot: {skill_list: ["Astrogation", "Gunnery", "Piloting (Planetary)", "Piloting (Space)"]}
      }
    },
    Commander: {
      skill_list: ["Coercion", "Cool", "Discipline", "Warfare", "Leadership", "Perception", "Ranged (Light)", "Vigilance"],
      specializations: {
        Commodore: {skill_list: ["Astrogation", "Computers", "Education", "Outer Rim"]},
        "Squadron Leader": {skill_list: ["Gunnery", "Mechanics", "Piloting (Planetary)", "Piloting (Space)"]},
        Tactician: {skill_list: ["Brawl", "Discipline", "Leadership", "Ranged (Heavy)"]}
      }
    },
    Diplomat: {
      skill_list: ["Charm", "Deception", "Core Worlds", "Lore", "Outer Rim", "Xenology", "Leadership", "Negotiation"],
      specializations: {
        Ambassador: {skill_list: ["Charm", "Discipline", "Core Worlds", "Negotiation"]},
        Agitator: {skill_list: ["Coercion", "Deception", "Underworld", "Streetwise"]},
        Quartermaster: {skill_list: ["Computers", "Negotiation", "Skulduggery", "Vigilance"]}
      }
    },
    Engineer: {
      skill_list: ["Athletics", "Computers", "Education", "Mechanics", "Perception", "Piloting (Space)", "Ranged (Light)", "Vigilance"],
      specializations: {
        Mechanic: {skill_list: ["Brawl", "Mechanics", "Piloting (Space)", "Skulduggery"]},
        Saboteur: {skill_list: ["Coordination", "Mechanics", "Skulduggery", "Stealth"]},
        Scientist: {skill_list: ["Computers", "Education", "Lore", "Medicine"]}
      }
    },
    Soldier: {
      skill_list: ["Athletics", "Brawl", "Warfare", "Medicine", "Melee", "Ranged (Light)", "Ranged (Heavy)", "Survival"],
      specializations: {
        Commando: {skill_list: ["Brawl", "Melee", "Resilience", "Survival"]},
        Medic: {skill_list: ["Xenology", "Medicine", "Resilience", "Survival"]},
        Sharpshooter: {skill_list: ["Cool", "Perception", "Ranged (Heavy)", "Ranged (Light)"]}
      }
    },
    Spy: {
      skill_list: ["Computers", "Cool", "Coordination", "Deception", "Warfare", "Perception", "Skulduggery", "Stealth"],
      specializations: {
        Infiltrator: {skill_list: ["Deception", "Melee", "Skulduggery", "Streetwise"]},
        Scout: {skill_list: ["Athletics", "Medicine", "Piloting (Planetary)", "Survival"]},
        Slicer: {skill_list: ["Computers", "Education", "Underworld", "Stealth"]}
      }
    },
    getSkillList: function(career) {
      return this[career].skill_list;
    }
  },
  getSkillList: function(string) {
    for (const career in this.careers) {
      if (string == career) {return this.careers.getSkillList(career);}
      else {
        for (const specialization in this.careers[career].specializations) {
          if (string == specialization) {return this.careers[career].specializations[specialization].skill_list;}
        }
      }
    }
    console.log("Error retrieving skill list for", string);
    return "";
  },
  getAvailableSpecializations: function (careerList) {
    var availableSpecializations = ["Recruit"];
    for (const targetCareer of careerList) {
      for (const career in this.careers) {
        if (career == targetCareer) {
          for (const specialization in this.careers[career].specializations) {availableSpecializations.push(specialization);}
        }
      }
    }
    return availableSpecializations;
  }
}
