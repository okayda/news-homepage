"use strict";

document.querySelector(".header-button").addEventListener("click", function () {
  document.querySelector("header").classList.add("active-header-nav");
});

document
  .querySelector(".main-nav-button")
  .addEventListener("click", function () {
    document.querySelector("header").classList.remove("active-header-nav");
  });
