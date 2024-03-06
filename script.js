import { Skills } from "./source/skills.js";
import { Talents } from "./source/talents.js";
import { Species } from "./source/species.js";
import { Character } from "./source/character.js";
import {Careers} from "./source/careers.js";
import * as Armors from "./source/armor.js";
import * as Weapons from "./source/weapons.js";
import * as Page_Functions from "./source/page_functions.js";
import { buildPage } from "./source/pageBuilder.js";
import { Characteristics } from "./source/characteristics.js";

buildPage();
addEventListeners();
var character = new Character("Character Name", "Duros");
console.log(character);


var editToggle = true; editSheet()
document.getElementById("editSheet").addEventListener("click", editSheet);

function editSheet() {
  editToggle = !editToggle;
  if (editToggle) {document.getElementById("editSheet").innerHTML = "Done Spending"}
  else {document.getElementById("editSheet").innerHTML = "Spend Experience"}
  Page_Functions.makeButtonsVisible(editToggle);
}

var isCharacterCreation = true;

function addEventListeners() {
  for (const characteristic of Characteristics.list_base) {
    document.getElementById(characteristic+"_down").addEventListener("click",function() {character.refundChar(characteristic, isCharacterCreation);});
    document.getElementById(characteristic+"_up").addEventListener("click",function() {character.buyChar(characteristic, isCharacterCreation);});
  }
  for (const skill of Skills.all_skills) {
    document.getElementById(skill + "_down").addEventListener("click",function() {character.refundRank(skill)});
    document.getElementById(skill + "_up").addEventListener("click",function() {character.buyRank(skill, isCharacterCreation);});
  }
  document.getElementById("armor").addEventListener("change",function() {character.setArmor(document.getElementById("armor").value);});
  document.getElementById("species").addEventListener("change", function() {character.setSpecies(document.getElementById("species").value);});
  document.getElementById("career").addEventListener("change", function() {character.setCareer(document.getElementById("career").value);});

}