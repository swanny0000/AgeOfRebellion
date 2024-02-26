import { Character, Characteristics } from "./character.js";
import { Skills } from "./skills.js";

export function resetSheet() {
  pushTextToElementList(Characteristics.list_base, 0);
  pushTextToElementList(Characteristics.list_derived, 0);
  var skill_list = Skills.all_skills
  for (var i=0; i<skill_list.length; i++) {
    var skill = skill_list[i];
    document.getElementById("career_" + skill).checked = false;
    pushTextToElement("rank_" + skill, "");
    setDicePool("dicepool_" + skill);
  }
}

export function updateSheet(character = "") {
  if (character == "") {Character.init();}
  updateSheetCharacteristics();
  updateSheetSkills(character);
}

function updateSheetCharacteristics() {
  var characteristics = Characteristics.list_all;
  for (var i=0; i<characteristics.length; i++) {
    var characteristic = characteristics[i];
    document.getElementById(characteristic).textContent = Character.getVal(characteristic);
  }
}

function updateSheetSkills(character) {
  for (let i=0; i<Skills.all_skills.length; i++) {
    var skill = Skills.all_skills[i];
    // update career checkbox
    document.getElementById("career_" + skill).checked = character["career_" + skill];
    //update rank number
    var rank = character["rank_" + skill];
    document.getElementById("rank_" + skill).textContent = character["rank_" + skill];
    //calculate and update dice pool
    var associated_char = Skills.associated_characteristic(skill);
    var rank_assoc_char = character[associated_char];
    setDicePool("dicepool_" + skill, Math.max(rank_assoc_char, rank), Math.min(rank_assoc_char, rank));
  }
}

export function setDicePool(element_id, ability_die_count = 1, proficiency_die_count = 0) {
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

function pushTextToElementList(element_id_list, value) {
  for (var i=0; i<element_id_list.length; i++){
    pushTextToElement(element_id_list[i], value)
    pushTextToElement(element_id_list[i], value);
  }
}

function pushTextToElement(element_id, value) {
  document.getElementById(element_id).textContent = value;
}

function clearSubElements(element_id) {
  var fields = document.getElementById(element_id).children;
  for (var i = fields.length-1; i >= 0; i--) { fields[i].remove(); }
}