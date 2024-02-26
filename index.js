import { Skills } from "./source/skills.js";
import { Talents } from "./source/talents.js";
import { Species } from "./source/species.js";
import { Character, Characteristics } from "./source/character.js";
import {Careers} from "./source/careers.js";
import * as Armors from "./source/armor.js";
import * as Weapons from "./source/weaponsOLD.js";
import * as Page_Functions from "./source/page_functions.js";

console.log("---VERIFY FUNCTIONS---")
console.log(Careers);
console.log("Commando Skill List:", Careers.getSkillList("Commando"));
console.log("Available Specializations for Spy and Diplomat:", Careers.getAvailableSpecializations(["Spy", "Diplomat"]));
console.log(Skills);
console.log("Knowledge Skills:", Skills.skillsOfType("Knowledge"));

console.log("---FUNCTIONS VERIFIED---")
Character.init();
//Character.setSpecies("Bothan");
Character.addCareer("Diplomat");
Character.addSpecialization("Disruptor");
Character.raiseRank("cool");
Character.lowerRank("stealth");
console.log(Character);

Page_Functions.updateSheet(Character);