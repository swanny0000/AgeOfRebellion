export const Weapons = {
  weapons: {
    "Holdout Blaster": {skill: "Ranged (Light)", damage: 5, crit: 4, range: "Short", consumable: false, pierce: 0, page_aoe: 0},
    "Light Blaster Pistol": {skill: "Ranged (Light)", damage: 5, crit: 4, range: "Medium"},
    "Blaster Pistol": {skill: "Ranged (Light)", damage: 6, crit: 3, range: "Medium"},
    "Heavy Blaster Pistol": {skill: "Ranged (Light)", damage: 7, crit: 3, range: "Medium"},
    "Blaster Carbine": {skill: "Ranged (Heavy)", damage: 9, crit: 3, range: "Medium"},
    "Blaster Rifle": {skill: "Ranged (Heavy)", damage: 9, crit: 3, range: "Long"},
    "Heavy Blaster Rifle": {skill: "Ranged (Heavy)", damage: 10, crit: 3, range: "Long"},
    "Light Repeating Blaster": {skill: "Ranged (Heavy)", damage: 11, crit: 3, range: "Long"},
    "Heavy Repeating Blaster": {skill: "Gunnery", damage: 15, crit: 2, range: "Long"},
    "Ion Blaster": {skill: "Ranged (Light)", damage: 10, crit: 5, range: "Short"},
    "Disruptor Pistol": {skill: "Ranged (Light)", damage: 10, crit: 2, range: "Short"},
    "Disruptor Rifle": {skill: "Ranged (Heavy)", damage: 10, crit: 2, range: "Long"},
    "Slugthrower Pistol": {skill: "Ranged (Light)", damage: 4, crit: 5, range: "Short"},
    "Slugthrower Rifle": {skill: "Ranged (Heavy)", damage: 7, crit: 5, range: "Medium"},
    "Frag Grenade": {skill: "Ranged (Light)", damage: 8, crit: 4, range: "Short", consumable: true},
    "Stun Grenade": {skill: "Ranged (Light)", damage: 8, crit: "", range: "Short", consumable: true},
    "AP Grenade": {skill: "Ranged (Light)", damage: 16, crit: 3, range: "Short", consumable: true, pierce: 3},
    "Brass Knuckles": {skill: "Brawl", damage: 1, crit: 4, range: "Engaged"},
    "Shock Gloves": {skill: "Brawl", damage: 0, crit: 5, range: "Engaged"},
    "Corellian Cutlass": {skill: "Melee", damage: 2, crit: 3, range: "Engaged"},
    "Combat Knife": {skill: "Melee", damage: 1, crit: 3, range: "Engaged"},
    "Force Pike": {skill: "Melee", damage: 3, crit: 2, range: "Engaged"},
    "Lightsaber": {skill: "Lightsaber", damage: 10, crit: 1, range: "Engaged"},
    "Truncheon": {skill: "Melee", damage: 2, crit: 5, range: "Engaged"},
    "Vibro-ax": {skill: "Melee", damage: 3, crit: 2, range: "Engaged"},
    "Vibroknife": {skill: "Melee", damage: 1, crit: 2, range: "Engaged"},
    "Vibrosword": {skill: "Melee", damage: 2, crit: 2, range: "Engaged"},
  },
  get list_all() {
    let list = [];
    for (const weapon in this.weapons) {list.push(weapon);}
    return list;
  },
  isConsumable: function(weapon) {
    if (Object.keys(this.weapons[weapon]).includes("consumable")) {return this.weapons[weapon].consumable;}
    else {return false}
  },
  getPierce: function(weapon) {
    if (Object.keys(this.weapons[weapon]).includes("pierce")) {return this.weapons[weapon].pierce;}
    else {return 0}
  },
  page_aoe: function(weapon) {
    if (Object.keys(this.weapons[weapon]).includes("page_aoe")) {return this.weapons[weapon].page_aoe;}
    else {return 0}
  },
  getSkill(weapon) {
    if (Object.keys(this.weapons[weapon]).includes("skill")) {return this.weapons[weapon].skill;}
    else {return 0}
  },
  getDamage(weapon) {
    if (Object.keys(this.weapons[weapon]).includes("damage")) {return this.weapons[weapon].damage;}
    else {return 0}
  },
  getCrit(weapon) {
    if (Object.keys(this.weapons[weapon]).includes("crit")) {return this.weapons[weapon].crit;}
    else {return 0}
  },
  getRange(weapon) {
    if (Object.keys(this.weapons[weapon]).includes("range")) {return this.weapons[weapon].range;}
    else {return 0}
  }
}


