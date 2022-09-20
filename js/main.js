import reposContext from "./repos.js";

("use strict");

const source = document.getElementById("entry-template").innerHTML;
const template = Handlebars.compile(source);
const html = template(reposContext);

document
  .querySelector(".repository-list")
  .insertAdjacentHTML("afterbegin", html);
