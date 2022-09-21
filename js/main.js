// import reposContext from "./repos.js";
import user from "./profile_info.js";
import orgsContext from "./organizations.js";
import apiKey from "./token.js";
("use strict");

//--------//
// const repos = {
//   repos: json,
// };
function generateHTML(json) {
  const repoSource = document.getElementById("repo-template").innerHTML;
  const repoTemplate = Handlebars.compile(repoSource);
  const repoHtml = repoTemplate({ repos: json });
  console.log(json);
  document
    .querySelector(".repository-list")
    .insertAdjacentHTML("afterbegin", repoHtml);
}

fetch(`https://api.github.com/users/alecdhansen/repos`, {
  headers: {
    Authorization: `token ${apiKey}`,
  },
})
  .then((response) => response.json())
  .then((json) => generateHTML(json));

//--------//

const userSource = document.getElementById("user-template").innerHTML;
const userTemplate = Handlebars.compile(userSource);
const userHtml = userTemplate(user);
// console.log(userHtml);

document
  .querySelector(".user-section")
  .insertAdjacentHTML("afterbegin", userHtml);

//--------//

const orgsSource = document.getElementById("orgs-template").innerHTML;
const orgsTemplate = Handlebars.compile(orgsSource);
const orgsHtml = orgsTemplate(orgsContext);
// console.log(orgsHtml);

document
  .querySelector(".organization-avatars")
  .insertAdjacentHTML("afterbegin", orgsHtml);

//--------//
