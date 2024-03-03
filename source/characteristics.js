export const Characteristics = {
  base_characteristics: {
    Brawn: {description: "", page_aoe: 23, short:"Br"},
    Agility: {description: "", page_aoe: 23, short:"Ag"},
    Intellect: {description: "", page_aoe: 23, short:"Int"},
    Cunning: {description: "", page_aoe: 23, short:"Cun"},
    Willpower: {description: "", page_aoe: 23, short:"Will"},
    Presence: {description: "", page_aoe: 23, short:"Pr"}
  },
  derived_characteristics: {
    Soak: {description: "", page_aoe: 221},
    "Wounds Threshold": {description: "", page_aoe: 229},
    "Strain Threshold": {description: "", page_aoe: 229},
    "Defense (Ranged)": {description: "", page_aoe: 220},
    "Defense (Melee)": {description: "", page_aoe: 220}
  },
  base_threshold_characteristics: {
    "Base Wounds Threshold": {description: "", page_aoe: 0},
    "Base Strain Threshold": {description: "", page_aoe: 0}
  },
  get list_base() {
    var list = [];
    for (const characteristic in this.base_characteristics) {list.push(characteristic);}
    return list;
  },
  get list_derived() {
    var list = [];
    for (const characteristic in this.derived_characteristics) {list.push(characteristic);}
    return list;
  },
  get list_threshold() {
    var list = [];
    for (const characteristic in this.base_threshold_characteristics) {list.push(characteristic);}
    return list;
  }
  ,
  get list_all() {
    var list = [];
    for (const characteristic in this.base_characteristics) {list.push(characteristic);}
    for (const characteristic in this.derived_characteristics) {list.push(characteristic);}
    return list;
  },
  getShort: function(characteristic) {
    return this.base_characteristics[characteristic].short;
  }
}