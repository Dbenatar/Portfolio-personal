// const skills = document.getElementById("skills");
const a = 1;

// skills.addEventListener("click", (e) => {
//   showlogo();
// });

function showLogo() {
  const a = document.getElementById("skills");

  if (a.style.display === "inline") {
    a.style.display = "none";
  } else {
    a.style.display = "inline";
  }
}
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
