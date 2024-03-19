import { Skills } from "./source/skills.js";
import { Talents } from "./source/talents.js";
import { Species } from "./source/species.js";
import { Character } from "./source/character.js";
import {Careers} from "./source/careers.js";
import * as Armors from "./source/armor.js";
import * as Weapons from "./source/weapons.js";
import * as Page_Functions from "./source/page_functions.js";
import { buildPage } from "./source/page_builder.js";
import { Characteristics } from "./source/characteristics.js";
import * as IO from "./source/io_saver.js";
import { Specializations } from "./source/specializations.js";

buildPage();
addEventListeners();
var character = IO.loadFromCookie();
character.addSpecialization("Infiltrator");
character.addSpecialization("Scout");

var editToggle = true; editSheet()
document.getElementById("editSheet").addEventListener("click", editSheet);

function editSheet() {
  editToggle = !editToggle;
  if (editToggle) {document.getElementById("editSheet").innerHTML = "Done Spending"; character.makeEditable();}
  else {document.getElementById("editSheet").innerHTML = "Spend Experience"; character.makeUneditable();}
  Page_Functions.makeButtonsVisible(editToggle);
  Page_Functions.updateCharacteristics(character);

  if (editToggle) {document.getElementById("exp_div").setAttribute("style", "display: flex; flex-flow: column;");}
  else {document.getElementById("exp_div").setAttribute("style", "display: none;");}
}

var isCharacterCreation = true;

function addEventListeners() {
  document.getElementById("char_name").addEventListener("change", function() {character.setName(document.getElementById("char_name").value)});

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

  document.getElementById("exp_down").addEventListener("click", function() {character.lowerExperience(5);});
  document.getElementById("exp_up").addEventListener("click", function() {character.addExperience(5);});

  document.getElementById("weapon_add_list").addEventListener("change", function() {
    if (document.getElementById("weapon_add_list").value == 0) {return;}
    character.addWeapon(document.getElementById("weapon_add_list").value);
    document.getElementById("weapon_add_list").value = 0;
  });

  document.getElementById("specialization_options").addEventListener("change", function() {
    if (document.getElementById("specialization_options").value == 0) {return;}
    character.buySpecialization(document.getElementById("specialization_options").value);
    document.getElementById("specialization_options").value = 0;
  })

  for (let i=1; i<9; i++) {
    document.getElementById("weapon_"+i+"_delete").addEventListener("click", function() {
      character.removeWeapon(document.getElementById("weapon_"+i+"_name").textContent);
    })
  }

  document.getElementById("isCharCreate").addEventListener("click", function() {
    isCharacterCreation = !isCharacterCreation;
    if (isCharacterCreation) { document.getElementById("isCharCreate").style.background = "#22DD22"} 
    else {document.getElementById("isCharCreate").style.background = "#f0f0f0"}
  })
}