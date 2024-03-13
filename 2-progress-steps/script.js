let bar = document.getElementById("bar");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let circles = document.querySelectorAll(".step");

let step = 1;

prev.addEventListener("click", () => {
  step--;

  updateStep();
});
next.addEventListener("click", () => {
  step++;

  updateStep();
});

function updateStep() {
  circles.forEach((circle, index) => {
    if (index < step) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  bar.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (step === 1) {
    prev.disabled = true;
  } else if (step === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

updateStep();
