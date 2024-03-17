import { Character } from "./character.js";
import { Characteristics } from "./characteristics.js";
import { Skills } from "./skills.js";
import { Species } from "./species.js";

export function saveCookies(character) {
  let expireDate = new Date;
  expireDate.setTime(expireDate.getTime() + (7*24*60*60*1000));
  setCookie("character_name", character.getName());
  setCookie("species", character.species);
  setCookie("experience", parseInt(character.experience));
  setCookie("total_experience", character.total_experience);
  setCookie("career", character.career);
  for (const characteristic of Characteristics.list_base) {
    setCookie(characteristic, character.getCharVal(characteristic));
  }
  setCookie("specializations", character.specializations);
  setCookie("weapons", character.getWeapons());
  setCookie("armor", character.armor);
  for (const skill of Skills.all_skills) {
    if (character.getSkillRank(skill) > 0) {setCookie(skill, character.getSkillRank(skill))}
    else {setCookie(skill, "", "Mon, 20 Feb 1995 12:00:00 UTC");}
  }
}

function setCookie(name, value, expireDate="") {
  if (expireDate="") {
    let expireDate = new Date;
    expireDate.setTime(expireDate.getTime() + (7*24*60*60*1000));
    console.log(expireDate);
  }
  document.cookie = `${name}=${value}; expires=${expireDate}; path=/`;
}

export function loadFromCookie() {
  let cookie = readCookie()
  if (cookie["isValid"] != true) {console.log("New Char"); return new Character("", "", true);}
  let character = new Character(cookie["character_name"], cookie["species"], true);
  for (const characteristic of Characteristics.list_base) {
    if (cookie[characteristic] != undefined) {character.setCharVal(characteristic, cookie[characteristic])}
  }
  if (cookie["experience"] != undefined) {character.experience = parseInt(cookie["experience"])}
  if (cookie["total_experience"] != undefined) {character.total_experience = parseInt(cookie["total_experience"])}
  if (cookie["career"] != undefined) {character.setCareer(cookie["career"])}
  if (cookie["specializations"] != undefined) {
    for (const spec of cookie["specializations"]) {character.addSpecialization(spec)}
  }
  const weapons_array = cookie["weapons"].split(",");
  if (weapons_array[0] != "") {for (const weapon of weapons_array) {character.addWeapon(weapon)}}
  if (cookie["armor"] != undefined) {character.setArmor(cookie["armor"]);}
  for (const skill of Skills.all_skills) {
    if (parseInt(cookie[skill]) > 0) {character.setSkillRank(skill, parseInt(cookie[skill]));}
  }
  console.log("Loaded Char from Cache:",character);
  character.refresh();
  return character
}

function readCookie(cookie=document.cookie) {
  let cookie_array = cookie.split('; ');
  let cookie_object = {};
  for (let i = 0; i < cookie_array.length; i++) {    
    let cur = cookie_array[i].split('=');
    cookie_object[cur[0]] = cur[1];
  }
  if (cookie_object["specializations"] != "") {cookie_object["specializations"] = cookie_object["specializations"].split(",")}
  if (cookie_object["character_name"] == "") {console.log("Cookie loading error: character_name is blank");return {};}
  if (!Species.list_all.includes(cookie_object["species"])) {console.log("Cookie loading error: species is", cookie["species"]);return {};}
  console.log("Cookie Object:",cookie_object);
  cookie_object["isValid"] = true;
  return cookie_object;
}