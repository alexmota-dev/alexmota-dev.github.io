document.addEventListener("DOMContentLoaded", () => {
  fetch("core/database/lang/resumeText.json")
    .then(response => response.json())
    .then(data => {
      buildResumeSectionForJson(data["en"]);
    })
    .catch(error => console.error("Erro ao carregar a seção 'Resume':", error));
});

function loadResumeSectionLanguage(lang) {
  fetch("core/database/lang/resumeText.json")
    .then(response => response.json())
    .then(data => {
      if (data[lang]) {
        buildResumeSectionForJson(data[lang]);
      }
    })
    .catch(error => console.error("Erro ao carregar idioma da seção 'Resume':", error));
}
