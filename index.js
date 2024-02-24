import { Skills } from "./objects/skills.js";
import { Talents } from "./objects/talents.js";
import { Species } from "./objects/species.js";
import { Character, Characteristics } from "./objects/character.js";
import {Careers} from "./objects/careers.js";
import * as Armors from "./objects/armor.js";
import * as Weapons from "./objects/weaponsOLD.js";

console.log("---VERIFY FUNCTIONS---")
console.log(Careers);
console.log("Commando Skill List:", Careers.getSkillList("Commando"));
console.log("Available Specializations for Spy and Diplomat:", Careers.getAvailableSpecializations(["Spy", "Diplomat"]));

console.log("---FUNCTIONS VERIFIED---")