import { Skills } from "./source/skills.js";
import { Talents } from "./source/talents.js";
import { Species } from "./source/species.js";
import { Character, Characteristics } from "./source/character.js";
import {Careers} from "./source/careers.js";
import * as Armors from "./source/armor.js";
import * as Weapons from "./source/weaponsOLD.js";
import * as Page_Functions from "./source/page_functions.js";
import { buildPage, addEventListeners } from "./source/pageBuilder.js";

buildPage()

Character.init();
Character.setSpecies("Duros");
Character.addCareer("Spy");
Character.addSpecialization("Infiltrator");
console.log(Character);

Page_Functions.updateSheet(Character);

addEventListeners();


document.getElementById("editSheet").addEventListener("click", toggleEdit);

function toggleEdit() {
  document.getElementById("editSheet").innerHTML = "Done editing"
  //loop through all base char, and skills and un-hide up and down buttons
}


