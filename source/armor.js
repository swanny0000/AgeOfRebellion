export const Armor = {
  armor: {
    "Adverse Environment Gear": {defense: 0, soak: 1, page_aoe:0},
    "Armored Clothing": {defense: 1, soak: 1, page_aoe:0},
    "Heavy Battle Armor": {defense: 1, soak: 2, page_aoe:0},
    "Heavy Clothing": {defense: 0, soak: 1, page_aoe:0},
    "Laminate Armor": {defense: 0, soak: 2, page_aoe:0},
    "Personal Deflector Shield": {defense: 2, soak: 0, page_aoe:0},
    "Padded Armor": {defense: 0, soak: 2, page_aoe:0},
  },
  getArmorSoak: function(armor) {
    try {
      var soak = this.armor[armor].soak;
      return soak;
    } catch (error) {return 0;}
  },
  getArmorDefense: function(armor) {
    try {
      var defense = this.armor[armor].defense;
      return defense;
    } catch (error) {return 0;}
  },
  get list_all() {
    let list = [];
    for (const option in this.armor) {list.push(option);}
    return list;
  }
}