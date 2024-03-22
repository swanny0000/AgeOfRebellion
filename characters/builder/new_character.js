import * as Page_Functions from "../../source/page_functions.js";
import { Characteristics } from "../../source/characteristics.js";
import { Species } from "../../source/species.js";
import { Careers } from "../../source/careers.js";
import { Specializations } from "../../source/specializations.js";

var steps = ["Background", "Duty", "Species", "Career", "Level Up", "Motivation", "Gear and Appearance"];

//build the species selection list and create event listener for when it's updated
Page_Functions.buildSpeciesSelect("species");
document.getElementById("species").addEventListener("change", function() {
  let curr_spec = this.value;
  //base characteristics
  Page_Functions.setElementText("species_brawn", Species.get_base_characteristic(curr_spec, "Brawn"));
  Page_Functions.setElementText("species_agility", Species.get_base_characteristic(curr_spec, "Agility"));
  Page_Functions.setElementText("species_intellect", Species.get_base_characteristic(curr_spec, "Intellect"));
  Page_Functions.setElementText("species_cunning", Species.get_base_characteristic(curr_spec, "Cunning"));
  Page_Functions.setElementText("species_willpower", Species.get_base_characteristic(curr_spec, "Willpower"));
  Page_Functions.setElementText("species_presence", Species.get_base_characteristic(curr_spec, "Presence"));
  Page_Functions.setElementText("species_experience", Species.getStartingExperience(curr_spec));
  //derived characteristics
  let wound_t_obj = Species.getBaseThresholdObj(curr_spec, "WOUND");
  let wound_t_text = wound_t_obj.Base + " + " + Characteristics.getShort(wound_t_obj.Mod);
  let strain_t_obj = Species.getBaseThresholdObj(curr_spec, "STRAIN");
  let strain_t_text = strain_t_obj.Base + " + " + Characteristics.getShort(strain_t_obj.Mod);
  Page_Functions.setElementText("species_wt", wound_t_text);
  Page_Functions.setElementText("species_st", strain_t_text);
  //additional abilities
  Page_Functions.clearSubElements("abilities");
  let abilities = Species.getAbilities(curr_spec);
  for (const line in abilities) {
    let ability_name = abilities[line].name;
    ability_name += ". ";
    let ability_text = abilities[line].text;
    let ability_string = ability_name + ability_text;
    document.getElementById("abilities").appendChild(Page_Functions.newDiv("", "ability-text", ability_string));
  }
})

//build the career selection list and create event listener for when it's updated
Page_Functions.buildSelect("career", "Select a Career...", Careers.list_all);
document.getElementById("career").addEventListener("change", function() {
  const career = this.value;
  //update career skills select
  for (let num=1; num<5; num++) {
    Page_Functions.buildSelect("career_skill_"+num, "Select a skill...", Careers.getSkillList(career));
  }
  //update specialization select
  Page_Functions.buildSelect("specialization", "Select a Specialization...", Careers.getCareerSpecializations(career));
  //reset specialization skills
  for (let num=1; num<3; num++) {
    Page_Functions.buildSelect("spec_skill_"+num, "Select a skill...", []);
  }
})
//build event listeners for skills selected from career
for (let num=1; num<5; num++) {
  const element_id = "career_skill_" + num;
  document.getElementById(element_id).addEventListener("change", function() {
    const sel_skill = this.value;
    for (let element_num=1; element_num<5; element_num++) {
      const target_element_id = "career_skill_" + element_num;
      if (target_element_id == this.id) {continue;}
      const parent = document.getElementById(target_element_id);
      const child = parent.querySelector("option[value='"+sel_skill+"']");
      child.setAttribute("disabled", "")
    }
  })
}

//create event listener for when specialization select is updated
document.getElementById("specialization").addEventListener("change", function() {
  const spec = this.value;
  for (let num=1; num<3; num++) {
    Page_Functions.buildSelect("spec_skill_"+num, "Select a skill...", Specializations.getSkillList(spec));
  }
})
//build event listeners for skills selected from specialization
for (let num=1; num<3; num++) {
  const element_id = "spec_skill_" + num;
  document.getElementById(element_id).addEventListener("change", function() {
    const sel_skill = this.value;
    for (let element_num=1; element_num<3; element_num++) {
      const target_element_id = "spec_skill_" + element_num;
      if (target_element_id == this.id) {continue;}
      const parent = document.getElementById(target_element_id);
      const child = parent.querySelector("option[value='"+sel_skill+"']");
      child.setAttribute("disabled", "")
    }
  })
}

