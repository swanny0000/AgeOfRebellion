export const Species = {
  species: {
    Bothan: {
      Brawn: 1, Agility: 2, Intellect: 2, Cunning: 3, Willpower: 2, Presence: 2,
      wound_threshold_base: 10, wound_threshold_char: "Brawn",
      strain_threshold_base: 11, strain_threshold_char: "Willpower",
      starting_experience: 100,
      starting_skills: ["Streetwise"],
      starting_talents: ["Convincing Demeanor"],
      abilities: [{"Special Abilities": "Bothans begin the game with one rank in Streetwise. They still may not train Streetwise above rank 2 during character creation. They also start with one rank in the Convincing Demeanor talent."}]
    },
    Droid: {
      Brawn: 1, Agility: 1, Intellect: 1, Cunning: 1, Willpower: 1, Presence: 1,
      wound_threshold_base: 10, wound_threshold_char: "Brawn",
      strain_threshold_base: 10, strain_threshold_char: "Willpower",
      starting_experience: 100,
      abilities: [
        {"Special Abilities": ""},
        {"Inorganic": ""},
        {"Mechanical Being": ""}
      ]
    },
    Duros: {},
    Gran: {},
    Human: {},
    Ithorian: {},
    "Mon Calamari": {},
    Sullustan: {}
  },
  get_base_characteristic: function(species, characteristic) {return this.species[species][characteristic];},
  calcSoak: function() {},
  calcBaseWoundsThreshold: function(character) {
    try {
      const base = this.get_base_characteristic(character.Species, "wound_threshold_base");
      const add = character.getVal(this.get_base_characteristic(character.Species, "wound_threshold_char"));
      return base + add;
    }
    catch (error) {console.log(error); return 0;}
  },
  calcBaseStrainThreshold: function(character) {
    try {
      const base = this.get_base_characteristic(character.Species, "strain_threshold_base");
      const add = character.getVal(this.get_base_characteristic(character.Species, "strain_threshold_char"));
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
  getStartingExperience: function(species) {return this.species[species].starting_experience;}
}