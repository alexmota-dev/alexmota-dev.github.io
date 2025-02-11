document.getElementById("lang-toggle").addEventListener("click", function (event) {
  event.preventDefault();

  const iconFlag = document.getElementById("lang-icon");
  let currentLang = this.getAttribute("data-lang");

  let brazilFlag = "https://flagcdn.com/w40/br.png";
  let englishFlag = "https://flagcdn.com/w40/us.png";

  const newLang = currentLang === "en" ? "pt" : "en";

  this.setAttribute("data-lang", newLang);

  iconFlag.src = newLang === "en"
    ? englishFlag
    : brazilFlag;

  iconFlag.alt = newLang === "en" ? "English" : "Português";

  localStorage.setItem("language", newLang);

  loadLanguage(newLang);
});

let currentLang = localStorage.getItem("language") || "en";

function loadLanguage(lang) {
  loadHeaderSectionLanguage(lang);
  loadHomeSectionLanguage(lang);
  loadAboutSectionLanguage(lang);
  loadFactsSectionLanguage(lang);
  loadSkillsSectionLanguage(lang);
  loadResumeSectionLanguage(lang);
  loadPortfolioSectionLanguage(lang);
  loadServicesSectionLanguage(lang);
  loadContactSectionLanguage(lang);
  loadModalLanguage(lang);
}

function loadHeaderSectionLanguage(lang) {
  fetch("core/database/lang/headerText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        buildHeaderSectionForJson(data[lang]);
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Header':", error));
}

function buildHomeSectionForJson(data) {
  document.getElementById("home-title").innerText = data.title;
  document.getElementById("home-description").innerHTML = `${data.description} <span class="typed" data-typed-items="${data.roles.join(", ")}"></span>`;

  // Salva a escolha do idioma
  localStorage.setItem("language", lang);

  console.log(data);
  console.log(data[lang]);

  // ✅ Reinicializa Typed.js após a troca de idioma
  restartTyped();
}

function loadHomeSectionLanguage(lang) {
  fetch("core/database/lang/homeText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        buildHomeSectionForJson(data[lang]);
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma:", error));
}

function buildAboutSectionForJson(data) {
  document.querySelector("#about .section-title h2").innerText = data.sectionTitle;
  document.querySelector("#about .content h3").innerText = data.role;
  document.querySelector("#about .content .fst-italic").innerText = data.quote;

  const aboutListItems = document.querySelectorAll("#about .content ul li");

  aboutListItems[0].innerHTML = `<i class="bi bi-chevron-right"></i> <strong>${data.emailLabel}</strong> <span>alexmota.work@gmail.com</span>`;
  aboutListItems[1].innerHTML = `<i class="bi bi-chevron-right"></i> <strong>${data.cityLabel}</strong> <span>${data.city}</span>`;
  aboutListItems[2].innerHTML = `<i class="bi bi-chevron-right"></i> <strong>${data.freelanceLabel}</strong> <span>${data.freelanceStatus}</span>`;
}


function loadAboutSectionLanguage(lang) {
  fetch("core/database/lang/aboutText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        buildAboutSectionForJson(data[lang]);
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'About':", error));
}

function buildFactsSectionForJson(data) {
  document.querySelector("#facts .section-title h2").innerText = data.sectionTitle;
  document.querySelector("#facts .section-title p").innerText = data.description;

  const factsBoxes = document.querySelectorAll("#facts .count-box");
  factsBoxes[0].querySelector("p strong").innerText = data.projectsDone;
  factsBoxes[1].querySelector("p strong").innerText = data.projectsOngoing;
  factsBoxes[2].querySelector("p strong").innerText = data.linesOfCode;
}

function loadFactsSectionLanguage(lang) {
  fetch("core/database/lang/factsText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        buildFactsSectionForJson(data[lang]);
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Facts':", error));
}

function buildSkillsSectionForJson(data) {
  document.querySelector("#skills .section-title h2").innerText = data.sectionTitle;
  document.querySelector("#skills .section-title p").innerText = data.description;
}

function loadSkillsSectionLanguage(lang) {
  fetch("core/database/lang/skillsText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        buildSkillsSectionForJson(data[lang]);
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Skills':", error));
}

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

function buildPortfolioSectionForJson(data) {
  document.querySelector("#projects .section-title h2").innerText = data.sectionTitle;
  document.querySelector("#projects .section-title p").innerText = data.description;

  const filters = document.querySelectorAll("#portfolio-flters li");
  filters[0].innerText = data.filters.all;
  filters[1].innerText = data.filters.app;
  filters[2].innerText = data.filters.technology;
  filters[3].innerText = data.filters.webDesign;
}

function loadPortfolioSectionLanguage(lang) {
  fetch("core/database/lang/portfolioText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        buildPortfolioSectionForJson(data[lang]);
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Portfolio':", error));
}

function buildServicesSectionForJson(data) {
  document.querySelector("#services .section-title h2").innerText = data.sectionTitle;

  const serviceBoxes = document.querySelectorAll("#services .icon-box");

  serviceBoxes[0].querySelector(".title a").innerText = data.services[0].title;
  serviceBoxes[0].querySelector(".description").innerText = data.services[0].description;

  serviceBoxes[1].querySelector(".title a").innerText = data.services[1].title;
  serviceBoxes[1].querySelector(".description").innerText = data.services[1].description;

  serviceBoxes[2].querySelector(".title a").innerText = data.services[2].title;
  serviceBoxes[2].querySelector(".description").innerText = data.services[2].description;
}

function loadServicesSectionLanguage(lang) {
  fetch("core/database/lang/servicesText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        buildServicesSectionForJson(data[lang]);
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Services':", error));
}

function buildContactSectionForJson(data) {
  document.querySelector("#contact .section-title h2").innerText = data.sectionTitle;
  document.querySelector("#contact .section-title p").innerText = data.description;

  document.querySelector("#contact .address h4").innerText = data.locationTitle;
  document.querySelector("#contact .address p").innerText = data.location;

  document.querySelector("#contact .email h4").innerText = data.emailTitle;
  document.querySelector("#contact .email p").innerText = data.email;

  document.querySelector("#contact .linkedin h4").innerText = data.linkedinTitle;
  document.querySelector("#contact .linkedin p a").innerText = data.linkedin;
}

function loadContactSectionLanguage(lang) {
  fetch("core/database/lang/contactText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        buildContactSectionForJson(data[lang]);
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Contact':", error));
}

function buildFooterSectionForJson(data) {
  document.querySelector("#footer .copyright").innerText = data.copyright;
}

function loadModalLanguage(lang) {
  fetch("core/database/lang/arrowModal.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        buildModalSectionForJson(data[lang]);
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Modal':", error));
}

// Função para reinicializar Typed.js
function restartTyped() {
  setTimeout(() => {
    const typedElement = document.querySelector(".typed");

    if (typedElement) {
      const typedStrings = typedElement.getAttribute("data-typed-items").split(",");

      // Remove qualquer instância anterior de Typed.js
      if (window.typedInstance) {
        window.typedInstance.destroy();
      }

      // Cria uma nova instância do Typed.js
      window.typedInstance = new Typed(".typed", {
        strings: typedStrings,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
      });

      console.log("Typed.js reinicializado com sucesso!");
    } else {
      console.warn("Elemento '.typed' não encontrado ao reinicializar Typed.js.");
    }
  }, 100); // Pequeno delay para garantir que o DOM foi atualizado
}
