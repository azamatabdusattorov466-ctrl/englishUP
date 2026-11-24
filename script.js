const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
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
}

const loginForm = document.querySelector("#login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!loginForm.reportValidity()) return;

    const name = loginForm.querySelector("#name").value.trim();
    const message = loginForm.querySelector("#login-message");

    try {
      sessionStorage.setItem("eduStarStudentName", name);
      window.location.assign("lessons.html");
    } catch (error) {
      console.error("Kirish seansini yaratib bo‘lmadi:", error);
      message.textContent =
        "Kirish amalga oshmadi. Brauzer sozlamalarini tekshirib, qayta urinib ko‘ring.";
      message.dataset.kind = "error";
      message.classList.add("visible");
    }
  });
}
