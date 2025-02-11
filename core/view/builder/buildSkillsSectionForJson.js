function buildSkillsSectionForJson(data) {
  document.querySelector("#skills .section-title h2").innerText = data.sectionTitle;
  document.querySelector("#skills .section-title p").innerText = data.description;
}