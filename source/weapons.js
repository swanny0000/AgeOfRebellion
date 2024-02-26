export const Weapons = {
  weapons: {
    "Holdout Blaster": {
      skill: "Ranged (Light)",
      damage: 5,
      crit: 4,
      range: "Short",
      consumable: false,
      pierce: 0,
      page_aoe: 0
    },
    "": {}, //"Light Blaster Pistol", "ranged_light", 5, 4, "Medium");
    "": {}, //"Blaster Pistol", "ranged_light", 6, 3, "Medium");
    "": {}, //"Heavy Blaster Pistol", "ranged_light", 7, 3, "Medium");
    "": {}, //"Blaster Carbine", "ranged_heavy", 9, 3, "Medium");
    "": {}, //"Blaster Rifle", "ranged_heavy", 9, 3, "Long");
    "": {}, //"Heavy Blaster Rifle", "ranged_heavy", 10, 3, "Long");
    "": {}, //"Light Repeating Blaster", "ranged_heavy", 11, 3, "Long");
    "": {}, //"Heavy Repeating Blaster", "gunnery", 15, 2, "Long");
    "": {}, //"Ion Blaster", "ranged_light", 10, 5, "Short");
    "": {}, //"Disruptor Pistol", "ranged_light", 10, 2, "Short");
    "": {}, //"Disruptor Rifle", "ranged_heavy", 10, 2, "Long");
    "": {}, //"Slugthrower Pistol", "ranged_light", 4, 5, "Short");
    "": {}, //"Slugthrower Rifle", "ranged_heavy", 7, 5, "Medium");
    "": {}, //"Frag Grenade", "ranged_light", 8, 4, "Short", true);
    "": {}, //"Stun Grenade", "ranged_light", 8, "", "Short", true);
    "": {}, //"AP Grenade", "ranged_light", 16, 3, "Short", true, 3);
    "": {}, //"Brass Knuckles", "brawl", 1, 4, "Engaged");
    "": {}, //"Shock Gloves", "brawl", 0, 5, "Engaged");
    "": {}, //"Corellian Cutlass", "melee", 2, 3, "Engaged");
    "": {}, //"Combat Knife", "melee", 1, 3, "Engaged");
    "": {}, //"Force Pike", "melee", 3, 2, "Engaged");
    "": {}, //"Lightsaber", "lightsaber", 10, 1, "Engaged");
    "": {}, //"Truncheon", "melee", 2, 5, "Engaged");
    "": {}, //"Vibro-ax", "melee", 3, 2, "Engaged");
    "": {}, //"Vibroknife", "melee", 1, 2, "Engaged");
    "": {} //"Vibrosword", "melee", 2, 2, "Engaged");
  },
  consumable: function(weapon) {
    if (Object.keys(this.weapons[weapon]).includes("consumable")) {return this.weapons[weapon].consumable;}
    else {return false}
  },
  pierce: function(weapon) {
    if (Object.keys(this.weapons[weapon]).includes("pierce")) {return this.weapons[weapon].pierce;}
    else {return 0}
  },
  page_aoe: function(weapon) {
    if (Object.keys(this.weapons[weapon]).includes("page_aoe")) {return this.weapons[weapon].page_aoe;}
    else {return 0}
  }
}


