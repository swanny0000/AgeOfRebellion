export const Careers = {
  careers: {
    Ace: {
      skill_list: ["astrogation", "cool", "gunnery", "mechanics", "perception", "piloting_planetary", "piloting_space", "ranged_light"],
      specializations: {
        Driver: {skill_list: ["cool", "gunnery", "mechanics", "piloting_planetary"]},
        Gunner: {skill_list: ["discipline", "gunnery", "ranged_heavy", "resilience"]},
        Pilot: {skill_list: ["astrogation", "gunnery", "piloting_planetary", "piloting_space"]}
      }
    },
    Commander: {
      skill_list: ["coercion", "cool", "discipline", "warfare", "leadership", "perception", "ranged_light", "vigilance"],
      specializations: {
        Commodore: {skill_list: ["astrogation", "computers", "education", "outer_rim"]},
        "Squadron Leader": {skill_list: ["gunnery", "mechanics", "piloting_planetary", "piloting_space"]},
        Tactician: {skill_list: ["brawl", "discipline", "leadership", "ranged_heavy"]}
      }
    },
    Diplomat: {
      skill_list: ["charm", "deception", "core_worlds", "lore", "outer_rim", "xenology", "leadership", "negotiation"],
      specializations: {
        Ambassador: {skill_list: ["charm", "discipline", "core_worlds", "negotiation"]},
        Agitator: {skill_list: ["coercion", "deception", "underworld", "streetwise"]},
        Quartermaster: {skill_list: ["computers", "negotiation", "skulduggery", "vigilance"]}
      }
    },
    Engineer: {
      skill_list: ["athletics", "computers", "education", "mechanics", "perception", "piloting_space", "ranged_light", "vigilance"],
      specializations: {
        Mechanic: {skill_list: ["brawl", "mechanics", "piloting_space", "skulduggery"]},
        Saboteur: {skill_list: ["coordination", "mechanics", "skulduggery", "stealth"]},
        Scientist: {skill_list: ["computers", "education", "lore", "medicine"]}
      }
    },
    Soldier: {
      skill_list: ["athletics", "brawl", "warfare", "medicine", "melee", "ranged_light", "ranged_heavy", "survival"],
      specializations: {
        Commando: {skill_list: ["brawl", "melee", "resilience", "survival"]},
        Medic: {skill_list: ["xenology", "medicine", "resilience", "survival"]},
        Sharpshooter: {skill_list: ["cool", "perception", "ranged_heavy", "ranged_light"]}
      }
    },
    Spy: {
      skill_list: ["computers", "cool", "coordination", "deception", "warfare", "perception", "skulduggery", "stealth"],
      specializations: {
        Infiltrator: {skill_list: ["deception", "melee", "skulduggery", "streetwise"]},
        Scout: {skill_list: ["athletics", "medicine", "piloting_planetary", "survival"]},
        Slicer: {skill_list: ["computers", "education", "underworld", "stealth"]}
      }
    }
  },
  getSkillList: function(string) {
    for (const career in this.careers) {
      if (string == this.careers[career]) {return this.careers[career].skill_list;}
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
