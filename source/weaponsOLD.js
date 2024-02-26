class Weapon {
  constructor(name, skill, damage, crit, range, consumable = false, pierce = 0, page_aoe = 0) {
    this.name = name;
    this.skill = skill;
    this.damage = damage;
    this.crit = crit;
    this.range = range;
    this.consumable = consumable;
    this.pierce = pierce;
    this.page_aoe = page_aoe;
  }
}

export const ew1 = new Weapon("Holdout Blaster", "ranged_light", 5, 4, "Short");
export const ew2 = new Weapon("Light Blaster Pistol", "ranged_light", 5, 4, "Medium");
export const ew3 = new Weapon("Blaster Pistol", "ranged_light", 6, 3, "Medium");
export const ew4 = new Weapon("Heavy Blaster Pistol", "ranged_light", 7, 3, "Medium");
export const ew5 = new Weapon("Blaster Carbine", "ranged_heavy", 9, 3, "Medium");
export const ew6 = new Weapon("Blaster Rifle", "ranged_heavy", 9, 3, "Long");
export const ew7 = new Weapon("Heavy Blaster Rifle", "ranged_heavy", 10, 3, "Long");
export const ew8 = new Weapon("Light Repeating Blaster", "ranged_heavy", 11, 3, "Long");
export const ew9 = new Weapon("Heavy Repeating Blaster", "gunnery", 15, 2, "Long");
export const ew10 = new Weapon("Ion Blaster", "ranged_light", 10, 5, "Short");
export const ew11 = new Weapon("Disruptor Pistol", "ranged_light", 10, 2, "Short");
export const ew12 = new Weapon("Disruptor Rifle", "ranged_heavy", 10, 2, "Long");

export const st1 = new Weapon("Slugthrower Pistol", "ranged_light", 4, 5, "Short");
export const st2 = new Weapon("Slugthrower Rifle", "ranged_heavy", 7, 5, "Medium");

export const eo1 = new Weapon("Frag Grenade", "ranged_light", 8, 4, "Short", true);
export const eo2 = new Weapon("Stun Grenade", "ranged_light", 8, "", "Short", true);
export const eo3 = new Weapon("AP Grenade", "ranged_light", 16, 3, "Short", true, 3);

export const br1 = new Weapon("Brass Knuckles", "brawl", 1, 4, "Engaged");
export const br2 = new Weapon("Shock Gloves", "brawl", 0, 5, "Engaged");

export const me1 = new Weapon("Corellian Cutlass", "melee", 2, 3, "Engaged");
export const me2 = new Weapon("Combat Knife", "melee", 1, 3, "Engaged");
export const me3 = new Weapon("Force Pike", "melee", 3, 2, "Engaged");
export const me4 = new Weapon("Lightsaber", "lightsaber", 10, 1, "Engaged");
export const me5 = new Weapon("Truncheon", "melee", 2, 5, "Engaged");
export const me6 = new Weapon("Vibro-ax", "melee", 3, 2, "Engaged");
export const me7 = new Weapon("Vibroknife", "melee", 1, 2, "Engaged");
export const me8 = new Weapon("Vibrosword", "melee", 2, 2, "Engaged");