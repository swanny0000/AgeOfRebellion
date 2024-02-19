function updateModifiers() {
  // convert ability scores into modifiers
  var strScore = document.getElementById("score_strength").value;
  document.getElementById("modifier_strength").value = Math.floor((strScore - 10)/2);

  var dexScore = document.getElementById("score_dexterity").value;
  document.getElementById("modifier_dexterity").value = Math.floor((dexScore - 10)/2);

  var conScore = document.getElementById("score_constitution").value;
  document.getElementById("modifier_constitution").value = Math.floor((conScore - 10)/2);

  var intScore = document.getElementById("score_intelligence").value;
  document.getElementById("modifier_intelligence").value = Math.floor((intScore - 10)/2);

  var wisScore = document.getElementById("score_wisdom").value;
  document.getElementById("modifier_wisdom").value = Math.floor((wisScore - 10)/2);

  var chaScore = document.getElementById("score_charisma").value;
  document.getElementById("modifier_charisma").value = Math.floor((chaScore - 10)/2);

  updateSkills();
  equipArmor();
}

function updateProfBonus() {
  //update proficiency bonus based on player level
  var playerLevel = parseInt(document.getElementById("player_level").value);
  if (playerLevel >= 17){
    document.getElementById("proficiency_bonus").value = 6;
  } else if (playerLevel >= 13) {
    document.getElementById("proficiency_bonus").value = 5
  } else if (playerLevel >= 9) {
    document.getElementById("proficiency_bonus").value = 4
  } else if (playerLevel >= 5) {
    document.getElementById("proficiency_bonus").value = 3
  } else {
    document.getElementById("proficiency_bonus").value = 2
  }
}

function updateSkills() {
  var profBonus = parseInt(document.getElementById("proficiency_bonus").value);
  var strMod = parseInt(document.getElementById("modifier_strength").value);
  var dexMod = parseInt(document.getElementById("modifier_dexterity").value);
  var conMod = parseInt(document.getElementById("modifier_constitution").value);
  var intMod = parseInt(document.getElementById("modifier_intelligence").value);
  var wisMod = parseInt(document.getElementById("modifier_wisdom").value);
  var chaMod = parseInt(document.getElementById("modifier_charisma").value);

  if (document.getElementById("proficiency_acrobatics").checked == true) {
    document.getElementById("score_acrobatics").value = dexMod + profBonus
  } else {document.getElementById("score_acrobatics").value = dexMod}

  if (document.getElementById("proficiency_animal_handling").checked == true) {
    document.getElementById("score_animal_handling").value = wisMod + profBonus
  } else {document.getElementById("score_animal_handling").value = wisMod}

  if (document.getElementById("proficiency_arcana").checked == true) {
    document.getElementById("score_arcana").value = intMod + profBonus
  } else {document.getElementById("score_arcana").value = intMod}

  if (document.getElementById("proficiency_athletics").checked == true) {
    document.getElementById("score_athletics").value = strMod + profBonus
  } else {document.getElementById("score_athletics").value = strMod}

  if (document.getElementById("proficiency_deception").checked == true) {
    document.getElementById("score_deception").value = chaMod + profBonus
  } else {document.getElementById("score_deception").value = chaMod}

  if (document.getElementById("proficiency_history").checked == true) {
    document.getElementById("score_history").value = intMod + profBonus
  } else {document.getElementById("score_history").value = intMod}

  if (document.getElementById("proficiency_insight").checked == true) {
    document.getElementById("score_insight").value = wisMod + profBonus
  } else {document.getElementById("score_insight").value = wisMod}

  if (document.getElementById("proficiency_intimidation").checked == true) {
    document.getElementById("score_intimidation").value = chaMod + profBonus
  } else {document.getElementById("score_intimidation").value = chaMod}

  if (document.getElementById("proficiency_investigation").checked == true) {
    document.getElementById("score_investigation").value = intMod + profBonus
  } else {document.getElementById("score_investigation").value = intMod}

  if (document.getElementById("proficiency_medicine").checked == true) {
    document.getElementById("score_medicine").value = wisMod + profBonus
  } else {document.getElementById("score_medicine").value = wisMod}

  if (document.getElementById("proficiency_nature").checked == true) {
    document.getElementById("score_nature").value = intMod + profBonus
  } else {document.getElementById("score_nature").value = intMod}

  if (document.getElementById("proficiency_perception").checked == true) {
    document.getElementById("score_perception").value = wisMod + profBonus
  } else {document.getElementById("score_perception").value = wisMod}

  if (document.getElementById("proficiency_performance").checked == true) {
    document.getElementById("score_performance").value = chaMod + profBonus
  } else {document.getElementById("score_performance").value = chaMod}

  if (document.getElementById("proficiency_persuasion").checked == true) {
    document.getElementById("score_persuasion").value = chaMod + profBonus
  } else {document.getElementById("score_persuasion").value = chaMod}

  if (document.getElementById("proficiency_religion").checked == true) {
    document.getElementById("score_religion").value = intMod + profBonus
  } else {document.getElementById("score_religion").value = intMod}

  if (document.getElementById("proficiency_sleight_of_hand").checked == true) {
    document.getElementById("score_sleight_of_hand").value = dexMod + profBonus
  } else {document.getElementById("score_sleight_of_hand").value = dexMod}

  if (document.getElementById("proficiency_stealth").checked == true) {
    document.getElementById("score_stealth").value = dexMod + profBonus
  } else {document.getElementById("score_stealth").value = dexMod}

  if (document.getElementById("proficiency_survival").checked == true) {
    document.getElementById("score_survival").value = wisMod + profBonus
  } else {document.getElementById("score_survival").value = wisMod}

}

function equipArmor(equippedArmor) {
  if (equippedArmor == null) {equippedArmor = document.getElementById("armor_equipped")} 
  var armor = equippedArmor.value;
  var dexMod = max(parseInt(document.getElementById("modifier_dexterity").value), 0)
  if (["armor_padded", "armor_leather", "armor_studded"].includes(armor)) {
    document.getElementById("armor_class").value = dexMod + 11
  } else if (["armor_hide"].includes(armor)) {
    document.getElementById("armor_class").value = dexMod + 12
  }
}


function playerLevelChange(){
  updateProfBonus();
  updateModifiers();
}