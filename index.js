//document.body.onload = resetSheet;
let base_characteristics_list = ["brawn", "agility", "intellect", "cunning", "willpower", "presence"];
let base_skill_list = ["astrogation","athletics","charm","coercion","computers","cool","coordination","deception","discipline","leadership","mechanics","medicine","negotiation","perception","piloting_planetary","piloting_space","resilience","skulduggery","stealth", "streetwise", "survival","vigilance", "brawl", "gunnery", "melee", "ranged_light", "ranged_heavy", "core_worlds", "education", "lore", "outer_rim", "underworld", "warfare", "xenology", "other_knowledge"];
let custom_skill_list = ["custom_skill_1", "custom_skill_2", "custom_skill_3", "custom_skill_4", "custom_skill_5"];

function resetSheet() {
  pushTextToElementList(["soak", "wounds_current", "strain_current", "defense_ranged", "defense_melee"], 0);
  pushTextToElementList(["wounds_threshold", "strain_threshold"], 10);
  pushTextToElementList(base_characteristics_list, 1);
  for (i=0; i<base_skill_list.length; i++) {
    document.getElementById("career_" + base_skill_list[i]).checked = false;
    pushTextToElement("rank_" + base_skill_list[i], 0);
    pushTextToElement("dicepool_" + base_skill_list[i], "A");
  }
  for (i=0; i<custom_skill_list.length; i++) {
    pushTextToElement(custom_skill_list[i], "");
    document.getElementById("career_" + custom_skill_list[i]).checked = false;
    pushTextToElement("rank_" + custom_skill_list[i], "");
    pushTextToElement("dicepool_" + custom_skill_list[i], "");
  }
  clearSubElements("weapons");
}

function pushTextToElement(element_id, value) {
  document.getElementById(element_id).textContent = value;
}

function pushTextToElementList(element_id_list, value) {
  for (i=0; i<element_id_list.length; i++){
    pushTextToElement(element_id_list[i], value)
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