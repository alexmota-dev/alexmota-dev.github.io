function buildHomeSectionForJson(data) {
  document.getElementById("home-title").innerText = data.title;
  document.getElementById("home-description").innerHTML = `${data.description} <span class="typed" data-typed-items="${data.roles.join(", ")}"></span>`;

  // ✅ Reinicializa Typed.js após a troca de idioma
  restartTyped();
}
