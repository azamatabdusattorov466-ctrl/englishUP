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
