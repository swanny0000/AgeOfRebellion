let CHARACTERISTIC_LIST = ["soak", "wounds_threshold", "wounds_current", "strain_threshold", "strain_current", "defense_ranged", "defense_melee", "brawn", "agility", "intellect", "cunning", "willpower", "presence"]
let GENERAL_SKILL_LIST = ["astrogation","athletics","charm","coercion","computers","cool","coordination","deception","discipline","leadership","mechanics","medicine","negotiation","perception","piloting_planetary","piloting_space","resilience","skulduggery","stealth","survival","vigilance"]
let COMBAT_SKILL_LIST = ["brawl", "gunnery", "melee", "ranged_light", "ranged_heavy"]
let KNOWLEDGE_SKILL_LIST = ["core_worlds", "education", "lore", "outer_rim", "underworld", "warfare", "xenology"]
let CUSTOM_SKILL_LIST = ["custom_skill_1", "custom_skill_2", "custom_skill_3", "custom_skill_4", "custom_skill_5"]

function loadCharacter(character) {
  resetCharacteristicList();
  resetSkillList(GENERAL_SKILL_LIST);
  resetSkillList(COMBAT_SKILL_LIST);
  resetSkillList(KNOWLEDGE_SKILL_LIST);
  resetSkillList(CUSTOM_SKILL_LIST);
  loadChar(character);
}
function loadChar(character) {
  var filename = "./characters/" + character + ".json";
  fetch(filename)
    .then(results => results.json())
    .then(console.log)
}


function activateCareerSkill(skill) {
  element = "career_" + skill;
  document.getElementById(element).checked = true;
}

function deactivateCareerSkill(skill) {
  element = "career_" + skill;
  document.getElementById(element).checked = false;
}

function increaseRank(skill) {
  element = "rank_" + skill;
  document.getElementById(element).value += 1;
}

function setRank(skill, rank = 0) {
  element = "rank_" + skill;
  document.getElementById(element).value = rank;
}

function resetSkill(skill) {
  setRank(skill, 0);
  deactivateCareerSkill(skill);
}

function resetCharacteristicList() {
  for (var i = 0, size = CHARACTERISTIC_LIST.length; i < size; i++) {
    element = CHARACTERISTIC_LIST[i];
    document.getElementById(element).value = 0;
  }
}

function resetSkillList(skillList) {
  for (var i = 0, size = skillList.length; i < size; i++) {
    skill = skillList[i];
    resetSkill(skill);
  }
}

function updateWeaponsSection() {
  var misc = 1;
}

function customSkillUpdate(num) {
  var skillID = "custom_skill_" + num;
  var careerCheckboxID = "career_custom_skill_" + num;
  var rankID = "rank_custom_skill_" + num;
  if (document.getElementById(skillID).value ==""){
    document.getElementById(careerCheckboxID).value = false;
    document.getElementById(careerCheckboxID).hidden = true;
    document.getElementById(rankID).value = 0
  } else {
    document.getElementById(careerCheckboxID).hidden = false;
  }
}