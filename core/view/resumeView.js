document.addEventListener("DOMContentLoaded", () => {
  fetch("core/database/lang/resumeText.json")
    .then(response => response.json())
    .then(data => {
      buildResumeSection(data["en"]);
    })
    .catch(error => console.error("Erro ao carregar a seção 'Resume':", error));
});

function buildResumeSection(data) {
  const resumeSection = document.getElementById("resume");
  resumeSection.innerHTML = `
    <div class="container">
      <div class="section-title">
        <h2>${data.sectionTitle}</h2>
        <p>${data.description}</p>
      </div>
      <div class="row">
        <div class="col-lg-6" data-aos="fade-up">
          <h3 class="resume-title">${data.sumaryTitle}</h3>
          <div class="resume-item pb-0">
            <h4>Alex Mota</h4>
            <p><em>${data.sumaryDescription}</em></p>
          </div>
          <h3 class="resume-title">${data.educationTitle}</h3>
          <div class="resume-item">
            <h4>${data.educationDetails.degree}</h4>
            <h5>${data.educationDetails.period}</h5>
            <p><em>${data.educationDetails.university}</em></p>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">${data.professionalExperienceTitle}</h3>
          ${data.experience.map(exp => `
            <div class="resume-item">
              <h4>${exp.position}</h4>
              <h5>${exp.period}</h5>
              <h6><a href="https://www.linkedin.com/company/${exp.company.toLowerCase()}/" target="_blank">${exp.company}</a></h6>
              <p><em>${exp.location}</em></p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function loadResumeSectionLanguage(lang) {
  fetch("core/database/lang/resumeText.json")
    .then(response => response.json())
    .then(data => {
      if (data[lang]) {
        buildResumeSection(data[lang]);
      }
    })
    .catch(error => console.error("Erro ao carregar idioma da seção 'Resume':", error));
}
