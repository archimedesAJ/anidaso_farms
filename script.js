"use strict";
const slideImg = document.getElementById("slideImg");
const images = new Array(
  "images/hen.jpg",
  "images/egg.jpg",
  "images/newChicks.jpg",
  "images/chicks.jpg"
);

const len = images.length;

let i = 0;

function slider() {
  if (i > len - 1) {
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  setTimeout("slider()", 3000);
}
