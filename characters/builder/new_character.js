import * as Page_Functions from "../../source/page_functions.js";

var step_id;
if (!Number.isInteger(step_id)) {step_id=0;}
  buildHeader(step_id);
  buildContent(step_id);

document.getElementById("prev").addEventListener("click", previousStep);
document.getElementById("next").addEventListener("click", nextStep);
function previousStep() {if (step_id > 0) {step_id-=1; buildHeader(step_id), buildContent(step_id);}}
function nextStep() {if (step_id < 6) {step_id+=1; buildHeader(step_id), buildContent(step_id);}}

function buildHeader(step_id) {
  let header_text = ["Determine Background", "Determine Duty", "Select a Species", "Select Career and Specialization", "Spend Experience", "Determine Motivation", "Choose Gear and Appearance"];
  Page_Functions.setElementText("step_header", header_text[step_id])
}

function buildContent(step_id) {
  Page_Functions.clearSubElements("step_content");
  switch (step_id) {
    case 0: //Determine Background
      break;
    case 1: //Determine Duty
      break;
    case 2: //Select a Species
      break;
    case 3: //Select a Career and Specialization
      break;
    case 4: //Spend Experience
      break;
    case 5: //Determine Motivation
      break;
    case 6: //Choose Gear and Appearance
      break;
  }
  Page_Functions.setElementText("step_content", step_id)
}


