function buildFactsSectionForJson(data) {
  document.querySelector("#facts .section-title h2").innerText = data.sectionTitle;
  document.querySelector("#facts .section-title p").innerText = data.description;

  const factsBoxes = document.querySelectorAll("#facts .count-box");
  factsBoxes[0].querySelector("p strong").innerText = data.projectsDone;
  factsBoxes[1].querySelector("p strong").innerText = data.projectsOngoing;
  factsBoxes[2].querySelector("p strong").innerText = data.linesOfCode;
}