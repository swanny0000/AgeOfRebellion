import { Character } from "./character.js";
import { Characteristics } from "./characteristics.js";
import { Skills } from "./skills.js";
import * as Page_Functions from "./page_functions.js"
import { Armor } from "./armor.js";
import { Species } from "./species.js";
import { Careers } from "./careers.js";

export function buildPage() {
  buildCharacterHeader();
  buildCharacteristics();
  buildSkillGrid();
  buildItems();
}

function buildCharacterHeader() {
  const page_div = document.getElementById("character_info");
  const name_header = newDiv("", "char_header_name", "CHARACTER");
  const name = newInput("char_name", "char_header_name_value", "");
  page_div.appendChild(name_header); page_div.appendChild(name);
  page_div.appendChild(newDiv("", "horizontal_line"));

  const species_div = newDiv("", "char_header_div")
  const species_header = newDiv("", "char_header", "SPECIES");
  species_div.appendChild(species_header); species_div.appendChild(createSpeciesOptions());
  page_div.appendChild(species_div);
  page_div.appendChild(newDiv("", "horizontal_line"));

  const career_div = newDiv("", "char_header_div")
  const career_header = newDiv("", "char_header", "CAREER");
  career_div.appendChild(career_header); career_div.appendChild(createCareerOptions());
  page_div.appendChild(career_div);
  page_div.appendChild(newDiv("", "horizontal_line"));

  const spec_list_div = newDiv("", "char_header_div")
  const spec_list_header = newDiv("", "char_header", "SPECIALIZATION TREES");
  const spec_list = newDiv("specializations", "char_header_value", "Infiltrator");
  spec_list_div.appendChild(spec_list_header); spec_list_div.appendChild(spec_list);
  page_div.appendChild(spec_list_div);
  page_div.appendChild(newDiv("", "horizontal_line"));
}

function createSpeciesOptions() {
  const species_div = document.createElement("select");
  species_div.appendChild(addOption("Select a species...", "", false));
  for (const species of Species.list_all) {
    species_div.appendChild(addOption(species));
  }
  species_div.setAttribute("id", "species");
  return species_div;
}

function createCareerOptions() {
  const career_div = document.createElement("select");
  career_div.appendChild(addOption("Select a career...", "", false));
  for (const career of Careers.list_all) {
    career_div.appendChild(addOption(career));
  }
  career_div.setAttribute("id", "career");
  return career_div;
}

function buildCharacteristics() {
  //derived characteristics section
  const derived_char_div = newDiv( "", "char_container");
  derived_char_div.appendChild(buildSoakDiv());
  derived_char_div.appendChild(buildThresholdDiv("Wounds"));
  derived_char_div.appendChild(buildThresholdDiv("Strain"));
  derived_char_div.appendChild(buildDefenseDiv());
  //base chrarcteristics section
  
  const base_char_div = newDiv("", "char_container");
  for (const char of Characteristics.list_base) {
    base_char_div.appendChild(buildBaseCharDiv(char));
  }
  //add to existing characteristics div
  const page_div = document.getElementById("characteristics");
  page_div.appendChild(derived_char_div);
  page_div.appendChild(newDiv("", "section_header", "CHARACTERISTICS"));
  page_div.appendChild(base_char_div);
}

function newDiv(div_id="", div_class="", div_text="", div_style="") {
  const div = document.createElement("div");
  if (div_id != "") {div.setAttribute("id", div_id);}
  if (div_class != "") {div.setAttribute("class", div_class);}
  if (div_style != "") {div.setAttribute("style", div_style);}
  if (div_text != "") {div.appendChild(document.createTextNode(div_text));}
  return div;
}

function newInput(inp_id, inp_class="", inp_value="", inp_style="", inp_type="") {
  const input = document.createElement("input");
  input.setAttribute("id", inp_id);
  if (inp_class != "") {input.setAttribute("class", inp_class);}
  if (inp_style != "") {input.setAttribute("style", inp_style);}
  if (inp_value != "") {input.setAttribute("value", inp_value);}
  if (inp_type == "number") {
    input.setAttribute("type", "number")
    input.setAttribute("min", "0");
  }
  return input;
}

function newBtn(btn_id, btn_class="", btn_text="", btn_style="", hidden=true, disabled=false) {
  const button = document.createElement("button");
  button.setAttribute("id", btn_id);
  if (btn_class != "") {button.setAttribute("class", btn_class);}
  if (btn_style != "") {button.setAttribute("style", btn_style);}
  if (btn_text != "") {button.appendChild(document.createTextNode(btn_text));}
  if (hidden) {button.setAttribute("hidden", hidden)}
  if (disabled) (button.setAttribute("disabled", ""))
  return button;
}

function newImg(img_src, img_id="") {
  const img = document.createElement("img");
  if (img_id != "") {img.setAttribute("id", img_id);}
  img.setAttribute("src", img_src);
  return img;
}

function newChk(chk_id, disabled=true) {
  let chk = newInput(chk_id);
  chk.setAttribute("type", "checkbox");
  if (disabled) {chk.setAttribute("disabled", "disabled");}
  return chk;
}

function buildSoakDiv() {
  const soak_div = newDiv( "", "char_div_derived", "SOAK");
  const soak_val = newDiv("Soak", "char_val", "0");
  soak_val.setAttribute("style", "width:100%")
  soak_div.appendChild(soak_val);
  soak_div.appendChild(createArmorOptions());
  return soak_div;
}

function createArmorOptions() {
  const armor_div = document.createElement("select");
  armor_div.appendChild(addOption("No Armor", ""));
  for (const armor of Armor.list_all) {
    armor_div.appendChild(addOption(armor));
  }
  armor_div.setAttribute("id", "armor");
  return armor_div;
}

function addOption(option, elementValue=option, selectable=true) {
  const element = document.createElement("option");
  element.setAttribute("value", elementValue);
  element.appendChild(document.createTextNode(option));
  if (selectable != true) {
    element.setAttribute("disabled", "true");
    element.setAttribute("selected", "true");
  }
  return element;
}

function buildThresholdDiv(type) {
  const threshold_div = newDiv( "", "char_div_derived", type.toUpperCase());
  const val_div = newDiv( "", "", "", "display: flex;");
  val_div.appendChild(newDiv(type + " Threshold", "char_val", "10", "width: 50%"));
  val_div.appendChild(newInput(type + "_current", "char_val", "0", "width: 50%", "number"));
  threshold_div.appendChild(val_div);
  const label_div = newDiv( "", "", "", "display: flex;");
  label_div.appendChild(newDiv( "", "char_label_half", "THRESHOLD"));
  label_div.appendChild(newDiv( "", "char_label_half", "CURRENT"));
  threshold_div.appendChild(label_div);
  return threshold_div;
}

function buildDefenseDiv() {
  const defense_div = newDiv( "", "char_div_derived", "DEFENSE");
  const val_div = newDiv( "", "", "", "display: flex;");
  val_div.appendChild(newDiv( "Defense (Ranged)", "char_val", "0", "width: 50%"));
  val_div.appendChild(newDiv( "Defense (Melee)", "char_val", "0", "width: 50%"));
  defense_div.appendChild(val_div);
  const label_div = newDiv( "", "", "", "display: flex;");
  label_div.appendChild(newDiv( "", "char_label_half", "RANGED"));
  label_div.appendChild(newDiv( "", "char_label_half", "MELEE"));
  defense_div.appendChild(label_div);
  return defense_div;
}

function buildBaseCharDiv(char_name) {
  const char_div = newDiv( "", "char_div_base");
  const char_val_holder = newDiv("", "", "", "width: 100%; display: flex; flex-flow: row nowrap; justify-content: center;");
  const char_val = newDiv(char_name, "char_val", "1");
  char_val_holder.appendChild(newBtn(char_name + "_down","", "-", "", false, false));
  char_val_holder.appendChild(char_val);
  char_val_holder.appendChild(newBtn(char_name + "_up","", "+", "", false, false));
  const char_label = newDiv("", "char_label_full", char_name.toUpperCase())
  char_div.appendChild(char_val_holder);
  char_div.appendChild(char_label);
  return char_div;
}

function buildItems() {
  const success = newImg("images/symbol_success.png");
  const failure = newImg("images/symbol_failure.png");
  const triumph = newImg("images/symbol_triumph.png");
  const despair = newImg("images/symbol_despair.png");
  const advantage = newImg("images/symbol_advantage.png");
  const threat = newImg("images/symbol_threat.png");

  const div = newDiv();
  div.appendChild(document.createTextNode("This is an example of all of the types of symbols.\nWe have Success "));
  div.appendChild(success);
  div.appendChild(document.createTextNode(" and Failure "));
  div.appendChild(failure);
  div.appendChild(document.createTextNode(", Triumph "));
  div.appendChild(triumph);
  div.appendChild(document.createTextNode(" and Despair "));
  div.appendChild(despair);
  div.appendChild(document.createTextNode(", and Advantage "));
  div.appendChild(advantage);
  div.appendChild(document.createTextNode(" and Threat "));
  div.appendChild(threat);
  div.appendChild(document.createTextNode("."));

  const page_div = document.getElementById("items");
  page_div.appendChild(newDiv("", "section_header", "WEAPONS"));
  page_div.appendChild(div);
}

function buildSkillGrid() {
  const skills_div = newDiv("", "skills_container")
  const left_side = newDiv("", "skill_div");
  left_side.appendChild(buildSkillBoxGrid("General", true));
  const right_side = newDiv("", "skill_div");
  right_side.appendChild(buildSkillBoxGrid("Combat", true));
  right_side.appendChild(buildSkillBoxGrid("Knowledge"));
  right_side.appendChild(buildSkillBoxGrid("Custom"));

  const page_div = document.getElementById("skills");
  page_div.appendChild(newDiv("", "section_header", "SKILLS"));
  skills_div.appendChild(left_side);
  skills_div.appendChild(right_side);
  page_div.appendChild(skills_div);
}

function buildSkillBoxGrid(skill_list_type, full_header=false) {
  const skill_box = newDiv("", "skill_grid");
  skill_box.appendChild(newSkillGridRow(skill_list_type, true, full_header));
  if (skill_list_type == "Custom") {
    for (let i=1; i<6; i++) {skill_box.appendChild(newSkillGridRow(i, "", "", true));}
  }
  else {
    for (const skill of Skills.skillsOfType(skill_list_type)) {
      skill_box.appendChild(newSkillGridRow(skill));
    }
  }
  return skill_box;
}

function newSkillGridRow(skill_name, isHeader=false, full_header=false, isCustom=false) {
  const row = newDiv("", isHeader ? "skill_grid_header" : "skill_grid_row");
  if (isHeader == true) {
    row.appendChild(newDiv("", "", skill_name.toUpperCase()+" SKILLS", "text-align: left;"));
    if (full_header == true) {
      row.appendChild(newDiv("", "", "CAREER"));
      row.appendChild(newDiv("", "", "RANK"));
      row.appendChild(newDiv("", "", "DICEPOOL"));
    }
    row.setAttribute("style","font-style: italic; color: #505050; font-size: small;")
  }
  else if (isCustom) {
    row.appendChild(newDiv("custom_skill_"+skill_name, "skill_title", "", "text-align: left;"));
    row.appendChild(newChk("career_custom_skill_"+skill_name));
    const rank_div = newDiv()
    rank_div.appendChild(newBtn("custom_skill_"+skill_name+"_down", "skill_rank_edit_button", "-", "", true));
    rank_div.appendChild(newDiv("rank_custom_skill"+skill_name, "skill_rank", "", "hidden: hidden;"));
    rank_div.appendChild(newBtn("custom_skill_"+skill_name+"_up", "skill_rank_edit_button", "+", "", true));
    rank_div.setAttribute("style","display:flex; justify-content: space-around;")
    row.appendChild(rank_div);
    row.appendChild(newDiv("dicepool_custom_skill"+skill_name, "skill_dice_pool"))
  }
  else {
    let attr_char = Skills.associated_characteristic(skill_name);
    let row_title = skill_name + " (" + Characteristics.getShort(attr_char) + ")";
    row.appendChild(newDiv("", "skill_title", row_title, "text-align: left;"));
    row.appendChild(newChk("career_"+skill_name));
    const rank_div = newDiv()
    rank_div.appendChild(newBtn(skill_name+"_down", "skill_rank_edit_button", "-", "", false));
    rank_div.appendChild(newDiv("rank_"+skill_name, "skill_rank", "0"));
    rank_div.appendChild(newBtn(skill_name+"_up", "skill_rank_edit_button", "+", "", false));
    rank_div.setAttribute("style","display:flex; justify-content: space-around;")
    row.appendChild(rank_div);
    row.appendChild(newDiv("dicepool_"+skill_name, "skill_dice_pool"))
  }
  return row;
}