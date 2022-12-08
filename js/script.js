"use strict";

document.querySelector(".header-button").addEventListener("click", function () {
  document.querySelector("header").classList.add("active-header-nav");
  document.querySelector(".overlay").style.display = "block";
});

document
  .querySelector(".main-nav-button")
  .addEventListener("click", function () {
    document.querySelector("header").classList.remove("active-header-nav");
    document.querySelector(".overlay").style.display = "none";
  });

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector("header").classList.remove("active-header-nav");
  document.querySelector(".overlay").style.display = "none";
});
