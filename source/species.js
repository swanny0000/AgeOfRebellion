export const Species = {
  species: {
    Bothan: {
      Brawn: 1, Agility: 2, Intellect: 2, Cunning: 3, Willpower: 2, Presence: 2,
      wound_threshold_base: 10, wound_threshold_char: "Brawn",
      strain_threshold_base: 11, strain_threshold_char: "Willpower",
      starting_experience: 100,
      starting_skills: ["Streetwise"],
      starting_talents: ["Convincing Demeanor"],
      abilities: [
        {name: "Special Abilities", text: "Bothans begin the game with one rank in Streetwise. They still may not train Streetwise above rank 2 during character creation. They also start with one rank in the Convincing Demeanor talent."}
      ]
    },
    Droid: {
      Brawn: 1, Agility: 1, Intellect: 1, Cunning: 1, Willpower: 1, Presence: 1,
      wound_threshold_base: 10, wound_threshold_char: "Brawn",
      strain_threshold_base: 10, strain_threshold_char: "Willpower",
      starting_experience: 175,
      abilities: [
        {name: "Special Abilities", text: ""},
        {name: "Inorganic", text: ""},
        {name: "Mechanical Being", text: ""}
      ]
    },
    Duros: {
      Brawn: 1, Agility: 2, Intellect: 3, Cunning: 2, Willpower: 2, Presence: 2,
      wound_threshold_base: 11, wound_threshold_char: "Brawn",
      strain_threshold_base: 10, strain_threshold_char: "Willpower",
      starting_experience: 100,
      starting_skills: ["Piloting (Space)"],
      abilities: [
        {name: "Special Abilities", text: "Duros begin the game with one rank in Piloting (Space). They still may not train Piloting (Space) above rank 2 during character creation."},
        {name: "Intuitive Navigation", text: "Duros may add <<advantage>> to all Astrogation checks they make."}
      ]
    },
    Gran: {
      Brawn: 2, Agility: 2, Intellect: 2, Cunning: 1, Willpower: 2, Presence: 3,
      wound_threshold_base: 10, wound_threshold_char: "Brawn",
      strain_threshold_base: 9, strain_threshold_char: "Willpower",
      starting_experience: 100,
      starting_skills: ["Charm"],
      abilities: [
        {name: "Special Abilities", text: "Gran begin the game with one rank in Charm of Negotiation. They still may not train Charm of Negotiation above rank 2 during character creation."},
        {name: "Enhanced Vision", text: ""}
      ]
    },
    Human: {
      Brawn: 2, Agility: 2, Intellect: 2, Cunning: 2, Willpower: 2, Presence: 2,
      wound_threshold_base: 10, wound_threshold_char: "Brawn",
      strain_threshold_base: 10, strain_threshold_char: "Willpower",
      starting_experience: 110,
      starting_skills: ["Astrogation", "Athletics"],
      abilities: [
        {name: "Special Abilities", text: ""},
        {name: "Enhanced Vision", text: ""}
      ]
    },
    Ithorian: {
      Brawn: 2, Agility: 1, Intellect: 2, Cunning: 2, Willpower: 3, Presence: 2,
      wound_threshold_base: 9, wound_threshold_char: "Brawn",
      strain_threshold_base: 12, strain_threshold_char: "Willpower",
      starting_experience: 90,
      starting_skills: ["Survival"],
      abilities: [
        {name: "Special Abilities", text: "Ithorians begin the game with one rank in Survival. They still may not train Survival above rank 2 during character creation."},
        {name: "Ithorian Bellow", text: ""}
      ]
    },
    "Mon Calamari": {
      Brawn: 2, Agility: 2, Intellect: 3, Cunning: 1, Willpower: 2, Presence: 2,
      wound_threshold_base: 10, wound_threshold_char: "Brawn",
      strain_threshold_base: 10, strain_threshold_char: "Willpower",
      starting_experience: 100,
      starting_skills: ["Education"],
      abilities: [
        {name: "Special Abilities", text: "Mon Calamari begin the game with one rank in Knowledge (Education). They still may not train Knowledge (Education) above rank 2 during character creation."},
        {name: "Amphibious", text: "Mon Calamari can breathe underwater without penalty and never suffer movement penalities for travelling through water."}
      ]
    },
    Sullustan: {
      Brawn: 2, Agility: 3, Intellect: 2, Cunning: 1, Willpower: 2, Presence: 2,
      wound_threshold_base: 10, wound_threshold_char: "Brawn",
      strain_threshold_base: 10, strain_threshold_char: "Willpower",
      starting_experience: 100,
      starting_skills: ["Astrogation"],
      abilities: [
        {name: "Special Abilities", text: "Ithorians begin the game with one rank in Astrogation. They still may not train Astrogation above rank 2 during character creation."}
      ]
    }
  },
  get_base_characteristic: function(species, characteristic) {return this.species[species][characteristic];},
  calcBaseWoundsThreshold: function(character) {
    try {
      const base = this.get_base_characteristic(character.species, "wound_threshold_base");
      const add = character.getCharVal(this.get_base_characteristic(character.species, "wound_threshold_char"));
      return base + add;
    }
    catch (error) {console.log(error); return 0;}
  },
  calcBaseStrainThreshold: function(character) {
    try {
      const base = this.get_base_characteristic(character.species, "strain_threshold_base");
      const add = character.getCharVal(this.get_base_characteristic(character.species, "strain_threshold_char"));
      return base + add;
    }
    catch (error) {console.log(error); return 0;}
  },
  hasStartingSkills: function(species) {return this.species[species].hasOwnProperty("starting_skills");},
  starting_skills: function(species) {
    try {return this.species[species].starting_skills;}
    catch (error) {return [""];}
  },
  hasStartingTalents: function(species) {return this.species[species].hasOwnProperty("starting_talents");},
  starting_talents: function(species) {
    try {return this.species[species].starting_talents;}
    catch (error) {return [""];}
  },
  getStartingExperience: function(species) {return this.species[species].starting_experience;},
  isValid: function(species) {
    if (this.species.hasOwnProperty(species)) {return true;}
    else {return false;}
  },
  get list_all() {
    let list = [];
    for (const species in this.species) {list.push(species);}
    return list;
  },
  getBaseThresholdObj(species, char) {
    char = char.toUpperCase();
    if (char == "WOUND") { 
      return {
        Base: this.get_base_characteristic(species, "wound_threshold_base"),
        Mod: this.get_base_characteristic(species, "wound_threshold_char")
      };
    }
    if (char == "STRAIN") {
      return {
        Base: this.get_base_characteristic(species, "strain_threshold_base"),
        Mod: this.get_base_characteristic(species, "strain_threshold_char")
      };
    }
    return {};
  },
  getAbilities(species) {return this.species[species].abilities;}
}