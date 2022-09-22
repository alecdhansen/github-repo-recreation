import apiKey from "./token.js";
("use strict");
const button = document.querySelector(".dropbtn");

//----REPOS----//

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

//----USER----//

function generateUserHTML(json) {
  const userSource = document.getElementById("user-template").innerHTML;
  const userTemplate = Handlebars.compile(userSource);
  const userHtml = userTemplate(json);
  // console.log(json);
  document
    .querySelector(".user-section")
    .insertAdjacentHTML("afterbegin", userHtml);
}

fetch(`https://api.github.com/users/alecdhansen`, {
  headers: {
    Authorization: `token ${apiKey}`,
  },
})
  .then((response) => response.json())
  .then((json) => generateUserHTML(json));

//----ORGS----//

function generateOrgHTML(json) {
  const orgSource = document.getElementById("orgs-template").innerHTML;
  const orgTemplate = Handlebars.compile(orgSource);
  const orgHtml = orgTemplate({ orgs: json });
  // console.log(json);
  document
    .querySelector(".organization-avatars")
    .insertAdjacentHTML("afterbegin", orgHtml);
}

fetch(`https://api.github.com/users/alecdhansen/orgs`, {
  headers: {
    Authorization: `token ${apiKey}`,
  },
})
  .then((response) => response.json())
  .then((json) => generateOrgHTML(json));

//----BUTTON EVENT LISTENER----//

button.addEventListener("click", function myFunction() {
  document.getElementById("dropdown-btn").classList.toggle("show");
});

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
