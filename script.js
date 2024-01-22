const skills = document.getElementById("skills");
const a = 1;

skills.addEventListener("click", (e) => {
  showlogo();
});

function showlogo() {
  if (a == 1) {
    document.getElementById("skills").style.display = "inline";
    return (a = 0);
  } else {
    document.getElementById("skills").style.display = "none";
    return (a = 1);
  }
}
