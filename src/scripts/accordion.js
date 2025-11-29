// A function to open and close accordions.
(() => {
  const accordionButtons = document.querySelectorAll(".accordion-title");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true" || false;

      button.setAttribute("aria-expanded", !expanded);
      content.classList.toggle("closed");
      content.classList.toggle("open");
    });
  });
})();
