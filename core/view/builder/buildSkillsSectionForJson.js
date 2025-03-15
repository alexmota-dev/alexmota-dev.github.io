function buildSkillsSectionForJson(data) {
  document.querySelector("#skills .section-title h2").innerText = data.sectionTitle;
  document.querySelector("#skills .section-title p").innerText = data.description;

  document.querySelectorAll(".skillValue").forEach((element) => {
    const text = element.innerText;
    const match = text.match(/^(\d+)/);
    if (match) {
      const years = match[1];
      element.innerText = `${years} ${data.time}`;
    }
  });
}