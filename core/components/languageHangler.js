document.getElementById("lang-toggle").addEventListener("click", function (event) {
  event.preventDefault(); // Evita recarregar a página ao clicar

  const langIcon = document.getElementById("lang-icon");
  let currentLang = this.getAttribute("data-lang"); // Obtém o idioma atual do botão

  // Define o novo idioma
  const newLang = currentLang === "en" ? "pt" : "en";

  // Atualiza o atributo do botão
  this.setAttribute("data-lang", newLang);

  // Altera o ícone da bandeira
  langIcon.src = newLang === "en" 
    ? "https://flagcdn.com/w40/us.png" 
    : "https://flagcdn.com/w40/br.png";

  langIcon.alt = newLang === "en" ? "English" : "Português";

  console.log("Idioma trocado para:", newLang);

  // Salva a escolha do idioma no localStorage
  localStorage.setItem("language", newLang);

  // Chama a função para carregar os textos no novo idioma
  loadLanguage(newLang);
});


// document.querySelectorAll(".lang-btn").forEach((btn) => {
//   btn.addEventListener("click", function () {
//     const lang = this.getAttribute("data-lang");
//     console.log("Tentativa de troca de idioma");

//     if (lang) {
//       console.log("Idioma escolhido:", lang);
//       loadLanguage(lang);
//     }
//   });
// });

let currentLang = localStorage.getItem("language") || "en";

// Função para carregar o JSON de textos e atualizar a página
function loadLanguage(lang) {
  console.log("Carregando idioma:", lang);

  loadHeaderSectionLanguage(lang);
  loadHomeSectionLanguage(lang);
  loadAboutSectionLanguage(lang);
  loadFactsSectionLanguage(lang);
  loadSkillsSectionLanguage(lang);
  loadResumeSectionLanguage(lang);
  loadPortfolioSectionLanguage(lang);
  loadServicesSectionLanguage(lang);
  loadContactSectionLanguage(lang);
}

function loadHomeSectionLanguage(lang) {
  fetch("core/database/lang/homeText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        document.getElementById("home-title").innerText = data[lang].title;
        document.getElementById("home-description").innerHTML = `${data[lang].description} <span class="typed" data-typed-items="${data[lang].roles.join(", ")}"></span>`;

        // Salva a escolha do idioma
        localStorage.setItem("language", lang);

        console.log(data);
        console.log(data[lang]);

        // ✅ Reinicializa Typed.js após a troca de idioma
        restartTyped();
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma:", error));
}

function loadAboutSectionLanguage(lang) {
  fetch("core/database/lang/aboutText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        document.querySelector("#about .section-title h2").innerText = data[lang].sectionTitle;
        document.querySelector("#about .content h3").innerText = data[lang].role;
        document.querySelector("#about .content .fst-italic").innerText = data[lang].quote;

        const aboutListItems = document.querySelectorAll("#about .content ul li");

        aboutListItems[0].innerHTML = `<i class="bi bi-chevron-right"></i> <strong>${data[lang].emailLabel}</strong> <span>alexmota.work@gmail.com</span>`;
        aboutListItems[1].innerHTML = `<i class="bi bi-chevron-right"></i> <strong>${data[lang].cityLabel}</strong> <span>${data[lang].city}</span>`;
        aboutListItems[2].innerHTML = `<i class="bi bi-chevron-right"></i> <strong>${data[lang].freelanceLabel}</strong> <span>${data[lang].freelanceStatus}</span>`;

        console.log("Seção 'About' traduzida com sucesso!");
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'About':", error));
}

function loadFactsSectionLanguage(lang) {
  fetch("core/database/lang/factsText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        document.querySelector("#facts .section-title h2").innerText = data[lang].sectionTitle;
        document.querySelector("#facts .section-title p").innerText = data[lang].description;

        const factsBoxes = document.querySelectorAll("#facts .count-box");
        factsBoxes[0].querySelector("p strong").innerText = data[lang].projectsDone;
        factsBoxes[1].querySelector("p strong").innerText = data[lang].projectsOngoing;
        factsBoxes[2].querySelector("p strong").innerText = data[lang].linesOfCode;

        console.log("Seção 'Facts' traduzida com sucesso!");
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Facts':", error));
}

function loadSkillsSectionLanguage(lang) {
  fetch("core/database/lang/skillsText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        document.querySelector("#skills .section-title h2").innerText = data[lang].sectionTitle;
        document.querySelector("#skills .section-title p").innerText = data[lang].description;

        console.log("Seção 'Skills' traduzida com sucesso!");
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Skills':", error));
}

function loadResumeSectionLanguage(lang) {
  fetch("core/database/lang/resumeText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        // Atualiza o título e descrição da seção
        document.querySelector("#resume .section-title h2").innerText = data[lang].sectionTitle;
        document.querySelector("#resume .section-title p").innerText = data[lang].description;

        // Atualiza os títulos e descrições de sumário, educação e experiência profissional
        document.querySelector("#resume .resume-title").innerText = data[lang].sumaryTitle;
        document.querySelector("#resume .resume-item h4").innerText = data[lang].sumaryDescription;

        document.querySelector("#resume .resume-item:nth-of-type(2) h4").innerText = data[lang].educationDetails.degree;
        document.querySelector("#resume .resume-item:nth-of-type(2) h5").innerText = data[lang].educationDetails.period;
        document.querySelector("#resume .resume-item:nth-of-type(2) em").innerText = data[lang].educationDetails.university;

        // Atualiza a experiência profissional
        const experienceItems = document.querySelectorAll(".resume-item");
        experienceItems[1].querySelector("h4").innerText = data[lang].experience[0].position;
        experienceItems[1].querySelector("h5").innerText = data[lang].experience[0].period;
        experienceItems[1].querySelector("h6").innerHTML = `<a href="https://www.linkedin.com/company/${data[lang].experience[0].company.toLowerCase()}/" target="_blank">${data[lang].experience[0].company}</a>`;
        experienceItems[1].querySelector("em").innerText = data[lang].experience[0].location;

        experienceItems[2].querySelector("h4").innerText = data[lang].experience[1].position;
        experienceItems[2].querySelector("h5").innerText = data[lang].experience[1].period;
        experienceItems[2].querySelector("h6").innerHTML = `<a href="https://www.linkedin.com/company/${data[lang].experience[1].company.toLowerCase()}/" target="_blank">${data[lang].experience[1].company}</a>`;
        experienceItems[2].querySelector("em").innerText = data[lang].experience[1].location;

        console.log("Seção 'Resume' traduzida com sucesso!");
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Resume':", error));
}

function loadPortfolioSectionLanguage(lang) {
  fetch("core/database/lang/portfolioText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        // Atualiza o título e a descrição da seção
        document.querySelector("#projects .section-title h2").innerText = data[lang].sectionTitle;
        document.querySelector("#projects .section-title p").innerText = data[lang].description;

        // Atualiza os filtros do portfólio
        const filters = document.querySelectorAll("#portfolio-flters li");
        filters[0].innerText = data[lang].filters.all;
        filters[1].innerText = data[lang].filters.app;
        filters[2].innerText = data[lang].filters.technology;
        filters[3].innerText = data[lang].filters.webDesign;

        console.log("Seção 'Portfolio' traduzida com sucesso!");
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Portfolio':", error));
}

function loadServicesSectionLanguage(lang) {
  fetch("core/database/lang/servicesText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        // Atualiza o título da seção
        document.querySelector("#services .section-title h2").innerText = data[lang].sectionTitle;

        // Atualiza os serviços
        const serviceBoxes = document.querySelectorAll("#services .icon-box");

        serviceBoxes[0].querySelector(".title a").innerText = data[lang].services[0].title;
        serviceBoxes[0].querySelector(".description").innerText = data[lang].services[0].description;

        serviceBoxes[1].querySelector(".title a").innerText = data[lang].services[1].title;
        serviceBoxes[1].querySelector(".description").innerText = data[lang].services[1].description;

        serviceBoxes[2].querySelector(".title a").innerText = data[lang].services[2].title;
        serviceBoxes[2].querySelector(".description").innerText = data[lang].services[2].description;

        console.log("Seção 'Services' traduzida com sucesso!");
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Services':", error));
}

function loadContactSectionLanguage(lang) {
  fetch("core/database/lang/contactText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        // Atualiza o título e a descrição da seção
        document.querySelector("#contact .section-title h2").innerText = data[lang].sectionTitle;
        document.querySelector("#contact .section-title p").innerText = data[lang].sectionDescription;

        // Atualiza os detalhes de contato
        document.querySelector("#contact .address h4").innerText = data[lang].locationTitle;
        document.querySelector("#contact .address p").innerText = data[lang].location;

        document.querySelector("#contact .email h4").innerText = data[lang].emailTitle;
        document.querySelector("#contact .email p").innerText = data[lang].email;

        document.querySelector("#contact .linkedin h4").innerText = data[lang].linkedinTitle;
        document.querySelector("#contact .linkedin p a").innerText = data[lang].linkedin;

        console.log("Seção 'Contact' traduzida com sucesso!");
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Contact':", error));
}

function loadHeaderSectionLanguage(lang) {
  fetch("core/database/lang/headerText.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[lang]) {
        // Atualiza o nome no perfil
        document.querySelector("#header .profile h1").innerText = data[lang].profileName;
        
        // Atualiza os links de navegação
        document.querySelector(".header-home").innerText = data[lang].home;
        document.querySelector(".header-about").innerText = data[lang].about;
        document.querySelector(".header-resume").innerText = data[lang].resume;
        document.querySelector(".header-projects").innerText = data[lang].projects;
        document.querySelector(".header-services").innerText = data[lang].services;
        document.querySelector(".header-contact").innerText = data[lang].contact;

        // Atualiza os links sociais
        document.querySelector("#header .social-links .google-plus").setAttribute('title', data[lang].github);
        document.querySelector("#header .social-links .linkedin").setAttribute('title', data[lang].linkedin);

        console.log("Seção 'Header' traduzida com sucesso!");
      }
    })
    .catch((error) => console.error("Erro ao carregar idioma da seção 'Header':", error));
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
