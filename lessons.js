const studentName = document.querySelector("#student-name");
const logoutButton = document.querySelector("#logout");
let savedName;

try {
  savedName = sessionStorage.getItem("eduStarStudentName");
} catch (error) {
  console.error("Kirish seansini o‘qib bo‘lmadi:", error);
  window.location.replace("index.html#contact");
}

if (!savedName) {
  window.location.replace("index.html#contact");
} else {
  studentName.textContent = savedName;
}

logoutButton.addEventListener("click", () => {
  try {
    sessionStorage.removeItem("eduStarStudentName");
    window.location.assign("index.html#contact");
  } catch (error) {
    console.error("Kirish seansidan chiqib bo‘lmadi:", error);
  }
});

const moduleTabs = document.querySelectorAll(".module-tab");
const modulePanels = document.querySelectorAll(".module-panel");

moduleTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedModule = tab.dataset.module;

    moduleTabs.forEach((item) => {
      item.setAttribute("aria-selected", String(item === tab));
    });

    modulePanels.forEach((panel) => {
      panel.hidden = panel.id !== `${selectedModule}-panel`;
    });
  });

  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();

    const tabs = Array.from(moduleTabs);
    const currentIndex = tabs.indexOf(tab);
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextTab = tabs[(currentIndex + direction + tabs.length) % tabs.length];
    nextTab.focus();
    nextTab.click();
  });
});
