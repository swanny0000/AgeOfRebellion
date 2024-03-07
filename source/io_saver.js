import { Character } from "./character.js";
import { Species } from "./species.js";

export function saveCookies(character) {
  let expireDate = new Date;
  expireDate.setTime(expireDate.getTime() + (7*24*60*60*1000));
  setCookie("character_name", character.getName());
  setCookie("species", character.species);

  console.log("setting cookie:",document.cookie);
}

function setCookie(name, value, expireDate="") {
  if (expireDate="") {
    let expireDate = new Date;
    expireDate.setTime(expireDate.getTime() + (7*24*60*60*1000));
  }
  document.cookie = `${name}=${value}; expires=${expireDate}; path=/`;
}

export function loadFromCookie() {
  let cookie = readCookie()
  if (cookie["isValid"] != true) {console.log("New Char"); return new Character("");}
  console.log("Importing Char");
  return new Character(cookie["character_name"], cookie["species"], true);
}

function readCookie(cookie=document.cookie) {
  let cookie_array = cookie.split('; ');
  let cookie_object = {};
  for (let i = 0; i < cookie_array.length; i++) {    
    let cur = cookie_array[i].split('=');
    cookie_object[cur[0]] = cur[1];
  }
  console.log("Cookie parsed into:",cookie_object)
  if (cookie_object["character_name"] == "") {console.log("Cookie loading error: character_name is blank");return {};}
  if (!Species.list_all.includes(cookie_object["species"])) {console.log("Cookie loading error: species is", cookie["species"]);return {};}
  cookie_object["isValid"] = true;
  return cookie_object;
}