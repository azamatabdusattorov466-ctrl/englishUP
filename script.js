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

const reviews = [
  {
    quote: "English UP’ga kelishdan oldin gapirishga juda uyalardim. Hozir esa ish suhbatlarida ingliz tilida bemalol fikrimni ayta olaman.",
    name: "Nilufar A.",
    detail: "Speaking kursi · 4 oy",
    result: "Pre-Intermediate → Upper-Intermediate",
    initial: "N",
    color: "#d7bbab",
  },
  {
    quote: "Darslar juda jonli va tushunarli o‘tadi. IELTS imtihonida kutganimdan ham yuqori natijaga erishdim.",
    name: "Azizbek R.",
    detail: "IELTS kursi · 3 oy",
    result: "IELTS 5.5 → 7.0",
    initial: "A",
    color: "#c5d9c2",
  },
  {
    quote: "Noldan boshlagandim, endi xorijdagi hamkasblarim bilan ingliz tilida bemalol muloqot qilaman. Ustozlar juda qo‘llab-quvvatlaydi.",
    name: "Madina S.",
    detail: "General English · 6 oy",
    result: "Beginner → Intermediate",
    initial: "M",
    color: "#d2cafa",
  },
];

let activeReview = 0;
const quote = document.querySelector("[data-review-quote]");
const name = document.querySelector("[data-review-name]");
const detail = document.querySelector("[data-review-detail]");
const result = document.querySelector("[data-review-result]");
const avatar = document.querySelector(".review-avatar");
const dots = [...document.querySelectorAll("[data-review-dot]")];

function showReview(index) {
  activeReview = (index + reviews.length) % reviews.length;
  const review = reviews[activeReview];
  quote.textContent = review.quote;
  name.textContent = review.name;
  detail.textContent = review.detail;
  result.textContent = review.result;
  avatar.textContent = review.initial;
  avatar.style.backgroundColor = review.color;
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === activeReview);
    dot.setAttribute("aria-current", dotIndex === activeReview ? "true" : "false");
  });
}

document.querySelector("[data-review-prev]").addEventListener("click", () => showReview(activeReview - 1));
document.querySelector("[data-review-next]").addEventListener("click", () => showReview(activeReview + 1));
dots.forEach((dot) => dot.addEventListener("click", () => showReview(Number(dot.dataset.reviewDot))));

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const message = form.querySelector(".form-message");
  message.textContent =
    "Rahmat! Forma demo rejimida — arizani haqiqiy yuborish uchun saytga server yoki CRM ulash kerak.";
  message.classList.add("visible");
});
