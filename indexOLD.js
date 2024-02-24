import * as Species from "./objects/species_OLD.js";
import * as Skills from "./objects/skills_OLD.js";
import * as Characteristics from "./objects/characteristics.js";
import {Careers} from "./objects/careers.js";
import * as Armors from "./objects/armor.js";
import * as Weapons from "./objects/weaponsOLD.js";

console.log("---VERIFY FUNCTIONS---")
console.log(Careers);
console.log("Commando Skill List:", Careers.getSkillList("Commando"));
console.log("Available Specializations for Spy and Diplomat:", Careers.getAvailableSpecializations(["Spy", "Diplomat"]));

console.log("---FUNCTIONS VERIFIED---")

let character = new Species.Bothan();
//character.addCareer(Careers.Spy);
//character.addSpecialization(Careers.Scout)
console.log(character);

updateSheet(character);

export function updateSheet(character = "") {
  if (character == "") {character = new Species.Base();}
  updateSheetCharacteristics(character, Characteristics.base_characteristics_list);
  updateSheetCharacteristics(character, Characteristics.derived_characteristic_list);
  updateSheetSkills(character);
  clearSubElements("weapons");
}

function updateSheetCharacteristics(character, vals) {
  for (let i=0; i<vals.length; i++) {
    var characteristic = vals[i];
    document.getElementById(characteristic).textContent = character[characteristic];
  }
}

function updateSheetSkills(character) {
  for (let i=0; i<Skills.base_skill_list.length; i++) {
    var skill = Skills.base_skill_list[i];
    // update career checkbox
    document.getElementById("career_" + skill).checked = character["career_" + skill];
    //update rank number
    var rank = character["rank_" + skill];
    document.getElementById("rank_" + skill).textContent = character["rank_" + skill];
    //calculate and update dice pool
    var associated_char = Skills[skill].associated_characteristic;
    var rank_assoc_char = character[associated_char];
    setDicePool("dicepool_" + skill, Math.max(rank_assoc_char, rank), Math.min(rank_assoc_char, rank));
  }
}

function resetSheet() {
  pushTextToElementList(Characteristics.derived_characteristic_list, 0);
  pushTextToElementList(["wounds_threshold", "strain_threshold"], 10);
  pushTextToElementList(Characteristics.base_characteristics_list, 1);
  
  for (i=0; i<Skills.base_skill_list.length; i++) {
    document.getElementById("career_" + Skills.base_skill_list[i]).checked = false;
    pushTextToElement("rank_" + Skills.base_skill_list[i], 0);
    setDicePool("dicepool_" + Skills.base_skill_list[i]);
  }
  for (i=0; i<Skills.custom_skill_list.length; i++) {
    pushTextToElement(Skills.custom_skill_list[i], "");
    document.getElementById("career_" + Skills.custom_skill_list[i]).checked = false;
    pushTextToElement("rank_" + Skills.custom_skill_list[i], "");
    setDicePool("dicepool_" + Skills.custom_skill_list[i], 0);
  }
  clearSubElements("weapons");
}

function pushTextToElement(element_id, value) {
  document.getElementById(element_id).textContent = value;
}

function pushTextToElementList(element_id_list, value) {
  for (i=0; i<element_id_list.length; i++){
    pushTextToElement(element_id_list[i], value);
  }
}

function setDicePool(element_id, ability_die_count = 1, proficiency_die_count = 0) {
  clearSubElements(element_id);
  pushTextToElement(element_id, "");
  //add proficiency die
  for (let i=0; i<proficiency_die_count; i++) {
    var proficiency_die = document.createElement("img");
    proficiency_die.src = "./images/die_proficiency.png";
    proficiency_die.alt = "proficiency dice";
    document.getElementById(element_id).appendChild(proficiency_die);
  }
  //add ability die
  for (let i=0; i<ability_die_count-proficiency_die_count; i++) {
    var ability_die = document.createElement("img");
    ability_die.src = "./images/die_ability.png";
    ability_die.alt = "ability dice";
    document.getElementById(element_id).appendChild(ability_die);
  }
}

function clearSubElements(element_id) {
  var fields = document.getElementById(element_id).children;
  for (var i = fields.length-1; i >= 0; i--) { fields[i].remove(); }
}

function addElement() {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("hellow there");
  newDiv.appendChild(newContent)
  const char_info_div = document.getElementById("weapons");
  char_info_div.appendChild(newDiv);
}