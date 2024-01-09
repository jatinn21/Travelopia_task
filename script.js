`use strict`;

const showLessBtn = document.querySelector("#showLess");
const readMoreBtn = document.querySelector("#readMore");
const shortText = document.querySelector(".short-text");
const longText = document.querySelector(".long-text");

// To Show more content :
readMoreBtn.addEventListener("click", function () {
  shortText.style.display = "none";
  longText.style.display = "block";
  readMoreBtn.style.display = "none";
  showLessBtn.style.display = "block";
});

// To hide some content :
showLessBtn.addEventListener("click", function () {
  shortText.style.display = "block";
  showLessBtn.style.display = "none";
  longText.style.display = "none";
  readMoreBtn.style.display = "block";
});
