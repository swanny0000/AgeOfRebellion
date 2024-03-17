import { Careers } from "./careers.js";
import { Characteristics } from "./characteristics.js";
import { Skills } from "./skills.js";
import { Species } from "./species.js";
import { Weapons } from "./weapons.js";
import * as Page_Builder from "./page_builder.js";

export function updateCharacteristics(character) {
  document.getElementById("char_name").value = character.getName();
  if (Species.list_all.includes(character.species)) {document.getElementById("species").value = character.species;}
  if (Careers.list_all.includes(character.career)) {document.getElementById("career").value = character.career;}
  var characteristics = Characteristics.list_all;
  for (var i=0; i<characteristics.length; i++) {
    const characteristic = characteristics[i];
    document.getElementById(characteristic).textContent = character.getCharVal(characteristic);
  }
  document.getElementById("experience").textContent = character.experience;
  document.getElementById("total_experience").textContent = character.total_experience;
  document.getElementById("armor").value = character.armor;

  if (character.isEditable == true) {
    document.getElementById("char_name").removeAttribute("disabled");
    document.getElementById("armor").removeAttribute("disabled");
    document.getElementById("species").removeAttribute("disabled");
    document.getElementById("career").removeAttribute("disabled");
    document.getElementById("specialization_options").removeAttribute("disabled");
  } else {
    document.getElementById("char_name").setAttribute("disabled", "disabled");
    document.getElementById("armor").setAttribute("disabled", "disabled");
    document.getElementById("species").setAttribute("disabled", "disabled");
    document.getElementById("career").setAttribute("disabled", "disabled");
    document.getElementById("specialization_options").setAttribute("disabled", "disabled");
  }
}

export function updateSpecializations(character) {
  clearSubElements("specializations");
  //for (const element of document.getElementById("specialization_options")) {}
  for (const spec of character.specializations) {
    let spec_div = Page_Builder.newDiv(spec, "specialization", spec);
    spec_div.addEventListener("click", function() {
      if (!character.isEditable) {return}
      character.refundSpecialization(spec);
      character.refresh();
    })
    document.getElementById("specializations").appendChild(spec_div);
  }
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

export function updateWeapons(character) {
  let i = 0;
  for (const weapon of character.getWeapons()) {
    i++; if (i>8) {break}
    document.getElementById("weapon_"+i+"_name").textContent = weapon;
    document.getElementById("weapon_"+i+"_skill").textContent = Weapons.getSkill(weapon);
    let damage = Weapons.getDamage(weapon)
    if (damage[damage.length - 1] == "+") {damage = parseInt(damage) + parseInt(character.getCharVal("Brawn"));}
    document.getElementById("weapon_"+i+"_damage").textContent = damage;
    document.getElementById("weapon_"+i+"_range").textContent = Weapons.getRange(weapon);
    clearSubElements("weapon_"+i+"_crit");
    for (let adv_count=0; adv_count<Weapons.getCrit(weapon); adv_count++) {
      let critSymbol = newImg("images/symbol_advantage.png")
      critSymbol.setAttribute("style","vertical-align: middle;")
      document.getElementById("weapon_"+i+"_crit").appendChild(critSymbol);
    }
    document.getElementById("weapon_"+i+"_special").textContent = "";
    document.getElementById("weapon_"+i+"_delete").removeAttribute("hidden");
  }
  while (i<8) {
    i++
    document.getElementById("weapon_"+i+"_name").textContent = "";
    document.getElementById("weapon_"+i+"_skill").textContent = "";
    document.getElementById("weapon_"+i+"_damage").textContent = "";
    document.getElementById("weapon_"+i+"_range").textContent = "";
    clearSubElements("weapon_"+i+"_crit");
    document.getElementById("weapon_"+i+"_special").textContent = "";
    document.getElementById("weapon_"+i+"_delete").setAttribute("hidden", "hidden");
  }
}

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
    makeButtonVisible(char + "_down", visible);
    makeButtonVisible(char + "_up", visible);
  }
  for (const skill of Skills.all_skills) {
    makeButtonVisible(skill + "_down", visible);
    makeButtonVisible(skill + "_up", visible);
  }
  makeButtonVisible("exp_down", visible);
  makeButtonVisible("exp_up", visible);
}

export function makeButtonVisible(btn_id, visible=false) {
  const btn = document.getElementById(btn_id);
  if (visible) {btn.removeAttribute("hidden");
  } else {btn.setAttribute("hidden", "hidden");
  }
}

export function makeSelectVisible(select_id, visible=false) {
  const select = document.getElementById(select_id);
  if (visible) {select.removeAttribute("hidden");
  } else {select.setAttribute("hidden", "hidden");
  }
}

export function addItem(row_num) {

}

export function newImg(img_src, img_id="") {
  const img = document.createElement("img");
  if (img_id != "") {img.setAttribute("id", img_id);}
  img.setAttribute("src", img_src);
  return img;
}