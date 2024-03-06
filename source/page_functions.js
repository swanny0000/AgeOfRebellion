import { Character } from "./character.js";
import { Characteristics } from "./characteristics.js";
import { Skills } from "./skills.js";

export function updateCharacteristics(character) {
  var characteristics = Characteristics.list_all;
  for (var i=0; i<characteristics.length; i++) {
    const characteristic = characteristics[i];
    document.getElementById(characteristic).textContent = character.getCharVal(characteristic);
  }
  document.getElementById("experience").textContent = character.experience;
}

export function updateSkills(character) {
  for (var i=0; i<Skills.all_skills.length; i++) {
    const skill = Skills.all_skills[i];
    // update career checkbox
    document.getElementById("career_" + skill).checked = character.isCareerSkill(skill);
    //update rank number
    const rank = character.getSkillRank(skill);
    document.getElementById("rank_" + skill).textContent = character.getSkillRank(skill);
    //calculate and update dice pool
    const associated_char = Skills.associated_characteristic(skill);
    const val_assoc_char = character.getCharVal(associated_char);
    setDicePool("dicepool_" + skill, Math.max(val_assoc_char, rank), Math.min(val_assoc_char, rank));
  }
}

export function updateTalents(character) {}


export function setDicePool(element_id, ability_die_count = 1, proficiency_die_count = 0) {
  clearSubElements(element_id);
  pushTextToElement(element_id, "");
  //add proficiency die
  for (var i=0; i<proficiency_die_count; i++) {
    const proficiency_die = document.createElement("img");
    proficiency_die.src = "./images/die_proficiency.png";
    proficiency_die.alt = "proficiency dice";
    document.getElementById(element_id).appendChild(proficiency_die);
  }
  //add ability die
  for (var i=0; i<ability_die_count-proficiency_die_count; i++) {
    const ability_die = document.createElement("img");
    ability_die.src = "./images/die_ability.png";
    ability_die.alt = "ability dice";
    document.getElementById(element_id).appendChild(ability_die);
  }
}

export function pushTextToElement(element_id, value) {
  document.getElementById(element_id).textContent = value;
}

function clearSubElements(element_id) {
  const fields = document.getElementById(element_id).children;
  for (var i = fields.length-1; i >= 0; i--) { fields[i].remove(); }
}

export function makeButtonsVisible(visible=false) {
  //loop through all base char, and skills and un-hide up and down buttons
  for (const char of Characteristics.list_base) {
    makeButtonVisible(document.getElementById(char + "_down"), visible);
    makeButtonVisible(document.getElementById(char + "_up"), visible);
  }
  for (const skill of Skills.all_skills) {
    makeButtonVisible(document.getElementById(skill + "_down"), visible);
    makeButtonVisible(document.getElementById(skill + "_up"), visible);
  }
}

function makeButtonVisible(btn, visble=false) {
  if (visble) {btn.removeAttribute("hidden");
  } else {btn.setAttribute("hidden", "hidden");
  }
}