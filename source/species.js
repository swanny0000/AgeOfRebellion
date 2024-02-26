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
      var base = this.get_base_characteristic(character.Species, "wound_threshold_base");
      var add = character.getVal(this.get_base_characteristic(character.Species, "wound_threshold_char"));
    }
    catch (error) {console.log(error); return 0;}
    return base + add;
  },
  calcBaseStrainThreshold: function(character) {
    try {
      var base = this.get_base_characteristic(character.Species, "strain_threshold_base");
      var add = character.getVal(this.get_base_characteristic(character.Species, "strain_threshold_char"));
    }
    catch (error) {console.log(error); return 0;}
    return base + add;
  },
  calcWoundsThreshold: function() {},
  calcStrainThreshold: function() {},
  calcRangedDefense: function() {},
  calcMeleeDefense: function() {},
  starting_skills: function(species) {return this[species].starting_skills},
  starting_talents: function(species) {return this[species].starting_talents}
}