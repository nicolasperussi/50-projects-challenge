let openButton = document.getElementById("open");
let closeButton = document.getElementById("close");

let content = document.getElementById("content-wrapper");
let circle = document.getElementById("circle");
let nav = document.getElementById("nav");

openButton.addEventListener("click", open);
closeButton.addEventListener("click", close);

function open() {
  content.classList.add("active");
  circle.classList.add("active");
  nav.classList.add("active");
}

function close() {
  content.classList.remove("active");
  circle.classList.remove("active");
  nav.classList.remove("active");
}
