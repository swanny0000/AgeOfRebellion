import * as Page_Functions from "../../source/page_functions.js";

var step_id;
if (!Number.isInteger(step_id)) {step_id=0;}
  buildHeader(step_id);
  buildContent(step_id);

document.getElementById("prev").addEventListener("click", previousStep);
document.getElementById("next").addEventListener("click", nextStep);
function previousStep() {if (step_id > 0) {step_id-=1; updatePageLocation(step_id);}}
function nextStep() {if (step_id < 6) {step_id+=1; updatePageLocation(step_id);}}

function updatePageLocation(step_id) {

}
