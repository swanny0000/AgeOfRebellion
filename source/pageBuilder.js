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
  buildSkills();
  buildItems();
}

function buildCharacterHeader() {
  const page_div = document.getElementById("character_info");
  const name_header = newDiv("", "char_header_name", "CHARACTER");
  const name = newInput("char_name", "char_header_name_value", "Vendri");
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

function buildSkills() {
  const skills_div = newDiv("", "skills_container")
  const left_side = newDiv("", "skill_div");
  left_side.appendChild(buildGeneralSkillBox());
  const right_side = newDiv("", "skill_div");
  right_side.appendChild(buildCombatSkillBox());
  right_side.appendChild(buildKnowledgeSkillBox());
  right_side.appendChild(buildCustomSkillBox());

  const page_div = document.getElementById("skills");
  page_div.appendChild(newDiv("", "section_header", "SKILLS"));
  skills_div.appendChild(left_side);
  skills_div.appendChild(right_side);
  page_div.appendChild(skills_div);
}

function buildGeneralSkillBox() {
  const table = document.createElement("table");
  table.setAttribute("class", "skill_table");
  let row_num = 0;
  for (const skill of Skills.General_skills) {
    buildSkillRow(table, row_num, skill);
    row_num++;
  }
  buildSkillTableHeader(table, "GENERAL");
  return table;
}

function buildCombatSkillBox() {
  const table = document.createElement("table");
  table.setAttribute("class", "skill_table");
  let row_num = 0;
  for (const skill of Skills.Combat_skills) {
    buildSkillRow(table, row_num, skill);
    row_num++;
  }
  buildSkillTableHeader(table, "COMBAT");
  return table;
}

function buildKnowledgeSkillBox() {
  const table = document.createElement("table");
  table.setAttribute("class", "skill_table");
  let row_num = 0;
  for (const skill of Skills.Knowledge_skills) {
    buildSkillRow(table, row_num, skill);
    row_num++;
  }
  buildSkillTableHeader(table, "KNOWLEDGE");
  return table;
}

function buildCustomSkillBox() {
  const table = document.createElement("table");
  table.setAttribute("class", "skill_table");
  const body = table.createTBody();
  for (let row_num=0; row_num<5; row_num++) {
    const row = table.insertRow(row_num);
    addStringCell(row, 0, "______________________")
    let career = row.insertCell(1);
    career.appendChild(newBtn("career_custom_skill_"+row_num, "skill_career", "", "", true, true));
    let rank = row.insertCell(2);
    rank.appendChild(newDiv("rank_custom_skill_"+row_num, "skill_rank"));
    let dicepool = row.insertCell(3);
    dicepool.appendChild(newDiv("dicepool_custom_skill_"+row_num, "skill_dice_pool"));
  }
  buildSkillTableHeader(table, "CUSTOM");
  return table;
}

function buildSkillTableHeader (table, type) {
  const header = table.createTHead();
  const row = header.insertRow(0);
  addStringCell(row, 0, type+" SKILLS", "cell_skill_title");
  if (type == "KNOWLEDGE" || type == "CUSTOM") {return;}
  addStringCell(row, 1, "CAREER?");
  addStringCell(row, 2, "");
  addStringCell(row, 3, "RANK");
  addStringCell(row, 4, "");
  addStringCell(row, 5, "DICEPOOL");
}

function addStringCell(row, col_num, cell_text, cell_class="", cell_style="") {
  let cell = row.insertCell(col_num);
  if (cell_class != "") {cell.setAttribute("class", cell_class)};
  if (cell_style != "") {cell.setAttribute("style", cell_style)};
  cell.appendChild(document.createTextNode(cell_text));
}

function buildSkillRow(table, row_num, skill) {
  let attr_char = Skills.associated_characteristic(skill);
  let row_title = skill + " (" + Characteristics.getShort(attr_char) + ")";

  const row = table.insertRow(row_num);
  addStringCell(row, 0, row_title, "cell_skill_title");
  buildCareerCell(row, skill);
  buildButtonCell(row, skill, "down");
  buildRankCell(row, skill);
  buildButtonCell(row, skill, "up");
  buildDicepoolCell(row, skill);
}

function buildButtonCell(row, skill, up_or_down) {
  if (up_or_down == "up") {
    let button = row.insertCell(4);
    button.setAttribute("class", "cell_skill_rank");
    button.appendChild(newBtn(skill+"_up", "", "+", "", false));
  } else if (up_or_down == "down") {
    let button = row.insertCell(2);
    button.setAttribute("class", "cell_skill_rank");
    button.appendChild(newBtn(skill+"_down", "", "-", "", false));
  }
  
}

function buildCareerCell(row, skill) {
  let career = row.insertCell(1);
  career.setAttribute("class", "cell_skill_career");
  career.appendChild(newChk("career_"+skill));
}

function buildRankCell(row, skill) {
  let rank = row.insertCell(3);
  rank.setAttribute("class", "cell_skill_rank");
  rank.appendChild(newDiv("rank_"+skill, "skill_rank", "0"));
}

function buildDicepoolCell(row, skill) {
  let dicepool = row.insertCell(5);
  dicepool.setAttribute("class", "cell_skill_dicepool");
  dicepool.appendChild(newDiv("dicepool_"+skill, "skill_dice_pool"));
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


