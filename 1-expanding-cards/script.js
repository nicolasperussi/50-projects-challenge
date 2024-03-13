let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    resetPanels();
    panel.classList.add("active");
  });
});

function resetPanels() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
