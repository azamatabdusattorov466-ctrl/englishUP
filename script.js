const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Menyuni ochish" : "Menyuni yopish");
  mainNav.classList.toggle("open", !isExpanded);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menyuni ochish");
    mainNav.classList.remove("open");
  });
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const message = form.querySelector(".form-message");
  message.textContent =
    "Rahmat! Forma demo rejimida — arizani haqiqiy yuborish uchun saytga server yoki CRM ulash kerak.";
  message.classList.add("visible");
});
