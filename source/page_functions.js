import { Species } from "./species.js";
import { Careers } from "./careers.js";

export function clearSubElements(element_id) {
  const fields = document.getElementById(element_id).children;
  for (var i = fields.length-1; i >= 0; i--) { fields[i].remove(); }
}

export function setElementText(element_id, value) {
  document.getElementById(element_id).textContent = value;
}

export function makeVisible(element_id, visible=false) {
  const element = document.getElementById(element_id);
  if (visible) {element.removeAttribute("hidden");
  } else {element.setAttribute("hidden", "hidden");
  }
}

export function newImg(img_src, img_id="") {
  const img = document.createElement("img");
  if (img_id != "") {img.setAttribute("id", img_id);}
  img.setAttribute("src", img_src);
  return img;
}

export function newDiv(div_id="", div_class="", div_text="", div_style="") {
  const div = document.createElement("div");
  if (div_id != "") {div.setAttribute("id", div_id);}
  if (div_class != "") {div.setAttribute("class", div_class);}
  if (div_style != "") {div.setAttribute("style", div_style);}
  if (div_text != "") {div.appendChild(document.createTextNode(div_text));}
  return div;
}

export function newInput(inp_id, inp_class="", inp_value="", inp_style="", inp_type="") {
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

export function newCheckbox(chk_id, disabled=true) {
  let chk = newInput(chk_id);
  chk.setAttribute("type", "checkbox");
  if (disabled) {chk.setAttribute("disabled", "disabled");}
  return chk;
}

export function newButton(btn_id, btn_class="", btn_text="", btn_style="", hidden=true, disabled=false) {
  const button = document.createElement("button");
  button.setAttribute("id", btn_id);
  if (btn_class != "") {button.setAttribute("class", btn_class);}
  if (btn_style != "") {button.setAttribute("style", btn_style);}
  if (btn_text != "") {button.appendChild(document.createTextNode(btn_text));}
  if (hidden) {button.setAttribute("hidden", hidden)}
  if (disabled) (button.setAttribute("disabled", ""))
  return button;
}

export function newSpeciesSelect() {
  const species_div = document.createElement("select");
  species_div.appendChild(newOption("Select a species...", "", false));
  for (const species of Species.list_all) {
    species_div.appendChild(newOption(species));
  }
  species_div.setAttribute("id", "species");
  return species_div;
}

export function newCareerSelect() {
  const career_div = document.createElement("select");
  career_div.appendChild(newOption("Select a career...", "", false));
  for (const career of Careers.list_all) {
    career_div.appendChild(newOption(career));
  }
  career_div.setAttribute("id", "career");
  return career_div;
}

export function newOption(option, elementValue=option, selectable=true) {
  const element = document.createElement("option");
  element.setAttribute("value", elementValue);
  element.appendChild(document.createTextNode(option));
  if (selectable != true) {
    element.setAttribute("disabled", "true");
    element.setAttribute("selected", "true");
  }
  return element;
}