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
  if (character == "new") {
    unlockPage()
  } else {
    loadChar(character);
    lockPage()
  }
}

function unlockPage() {}
function lockPage() {}

function loadChar(character) {
  var url = "https://raw.githubusercontent.com/swanny0000/AgeOfRebellion/master/characters/" + character + ".json";
  fetch(url)
    .then(res => res.json())
    .then(out =>
      updateFromJson(out))
    .catch(err => { throw err });
}
function updateFromJson(jsonData) {
  loadCharacterInfo(jsonData);
  loadCharacteristics(jsonData);
  loadCareerSkills(jsonData);
  loadSkills(jsonData);
  loadTalents(jsonData);
  loadGear(jsonData);
}

function loadCharacterInfo(data) {}
function loadCharacteristics(data) {
  for (var i = 0, size = data.characteristics.length; i < size; i++) {
    updateCharacteristic(data.career_skills[i].element, data.career_skills[i].value)
  }
}
function loadCareerSkills(data) {
  for (var i = 0, size = data.career_skills.length; i < size; i++) {
    activateCareerSkill(data.career_skills[i].skill);
  }
}
function loadSkills(data) {
  for (var i = 0, size = data.skills.length; i < size; i++) {
    setRank(data.skills[i].skill, data.skills[i].rank);
  }
}
function loadTalents(data) {}
function loadGear(data) {}


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

function updateCharacteristic(element, newVal) {
  document.getElementById(element).value = newVal;
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