class Armor {
  constructor(name, defense = 0, soak = 0, page_aoe = 0) {
    this.name = name;
    this.defense = defense;
    this.soak = soak;
    this.page_aoe = page_aoe;
  }
}

export const ar1 = new Armor("Adverse Environment Gear", 0, 1, 0);
export const ar2 = new Armor("Armored Clothing", 1, 1, 0);
export const ar3 = new Armor("Heavy Battle Armor", 1, 2, 0);
export const ar4 = new Armor("Heavy Clothing", 0, 1, 0);
export const ar5 = new Armor("Laminate Armor", 0, 2, 0);
export const ar6 = new Armor("Personal Deflector Shield", 2, 0, 0);
export const ar7 = new Armor("Padded Armor", 0, 2, 0);