import reposContext from "./repos.js";
import user from "./profile_info.js";
import orgsContext from "./organizations.js";

("use strict");

//--------//

const repoSource = document.getElementById("repo-template").innerHTML;
const repoTemplate = Handlebars.compile(repoSource);
const repoHtml = repoTemplate(reposContext);

document
  .querySelector(".repository-list")
  .insertAdjacentHTML("afterbegin", repoHtml);

//--------//

const userSource = document.getElementById("user-template").innerHTML;
const userTemplate = Handlebars.compile(userSource);
const userHtml = userTemplate(user);
console.log(userHtml);

document
  .querySelector(".user-section")
  .insertAdjacentHTML("afterbegin", userHtml);

//--------//

const orgsSource = document.getElementById("orgs-template").innerHTML;
const orgsTemplate = Handlebars.compile(orgsSource);
const orgsHtml = orgsTemplate(orgsContext);
console.log(orgsHtml);

document
  .querySelector(".organization-avatars")
  .insertAdjacentHTML("afterbegin", orgsHtml);
