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

  loadHomeSectionLanguage(lang)
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
