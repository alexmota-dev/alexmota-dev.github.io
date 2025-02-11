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

  loadLanguage(newLang);
});

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

function buildModalSectionForJson(data) {
  document.querySelector("#arrow-modal-text").innerText = data.text;
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
