import { Skills } from "./source/skills.js";
import { Talents } from "./source/talents.js";
import { Species } from "./source/species.js";
import { Character, Characteristics } from "./source/character.js";
import {Careers} from "./source/careers.js";
import * as Armors from "./source/armor.js";
import * as Weapons from "./source/weaponsOLD.js";
import * as Page_Functions from "./source/page_functions.js";

Character.init();
//Character.setSpecies("Droid");
Character.addCareer("Diplomat");
Character.addSpecialization("Agitator");
Character.addTalent("Swift");Character.addTalent("Swift");
console.log(Character);
console.log(Character.active_talents);


Page_Functions.updateSheet(Character);


document.getElementById("showOverlay").addEventListener("click", turnOnOverlay);
document.getElementById("hideOverlay").addEventListener("click", turnOffOverlay);
turnOffOverlay();
function turnOnOverlay() {document.getElementById("spendExp_background").style.display = "block";}
function turnOffOverlay() {document.getElementById("spendExp_background").style.display = "none";}


document.getElementById("editSheet").addEventListener("click", editSheet);
document.getElementById("noEditSheet").addEventListener("click", noEditSheet);
function editSheet() {
  document.getElementById("editSheet").hidden = true;
  document.getElementById("noEditSheet").hidden = false;
  document.getElementById("Astrogation_down").hidden=false;
  document.getElementById("Astrogation_up").hidden = false;
  document.getElementById("Brawn_down").hidden = false;
  document.getElementById("Brawn_up").hidden = false;
  Page_Functions.updateSheet(Character);
}
function noEditSheet() {
  document.getElementById("editSheet").hidden = false;
  document.getElementById("noEditSheet").hidden = true;
  document.getElementById("Astrogation_down").hidden = true;
  document.getElementById("Astrogation_up").hidden = true;
  document.getElementById("Brawn_down").hidden = true;
  document.getElementById("Brawn_up").hidden = true;
  Page_Functions.updateSheet(Character);
}


document.getElementById("Astrogation_down").addEventListener("click",refundRankIncrease);
document.getElementById("Astrogation_up").addEventListener("click",purchaseAstrogation);
function purchaseAstrogation() {
  Character.purchaseSkillRankIncrease("Astrogation");
  console.log(Character.experience);
  Page_Functions.updateSheet(Character);
}
function refundRankIncrease() {
  Character.refundSkillRankIncrease("Astrogation");
  console.log(Character.experience);
  Page_Functions.updateSheet(Character);
}
document.getElementById("Brawn_down").addEventListener("click",refundCharacteristicIncrease);
document.getElementById("Brawn_up").addEventListener("click",purchaseCharacteristicIncrease);
function purchaseCharacteristicIncrease() {
  Character.purchaseCharacteristicIncrease("Brawn", true);
  console.log(Character.experience);
  Page_Functions.updateSheet(Character);
}
function refundCharacteristicIncrease() {
  Character.refundCharacteristicIncrease("Brawn", true);
  console.log(Character.experience);
  Page_Functions.updateSheet(Character);
}