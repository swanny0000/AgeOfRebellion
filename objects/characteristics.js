export const base_characteristics_list = ["brawn", "agility", "intellect", "cunning", "willpower", "presence"];
export const derived_characteristic_list = ["soak", "wounds_threshold", "strain_threshold", "defense_ranged", "defense_melee"]

class Characteristic {
  constructor(description, page_aoe = 0) {
    this.description = description;
    this.page_aoe = page_aoe;
  }
}

export const brawn = new Characteristic("", 23)
export const agility = new Characteristic("", 23)
export const intellect = new Characteristic("", 23)
export const cunning = new Characteristic("", 23)
export const willpower = new Characteristic("", 23)
export const presence = new Characteristic("", 23)

export const soak = new Characteristic("", 221)
export const wounds_threshold = new Characteristic("", 229)
export const strain_threshold = new Characteristic("", 229)
export const defense_ranged = new Characteristic("", 220)
export const defense_melee = new Characteristic("", 220)