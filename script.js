// const skills = document.getElementById("skills");
const a = 1;

// skills.addEventListener("click", (e) => {
//   showlogo();
// });

function showLogo() {
  const a = document.getElementById("skills");

  if (a.style.display === "none") {
    a.style.display = "inline";
  } else {
    a.style.display = "none";
  }
}
