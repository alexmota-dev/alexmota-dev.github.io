function buildAboutSectionForJson(data) {
  document.querySelector("#about .section-title h2").innerText = data.sectionTitle;
  document.querySelector("#about .content h3").innerText = data.role;
  document.querySelector("#about .content .fst-italic").innerText = data.quote;

  const aboutListItems = document.querySelectorAll("#about .content ul li");

  aboutListItems[0].innerHTML = `<i class="bi bi-chevron-right"></i> <strong>${data.emailLabel}</strong> <span>alexmota.work@gmail.com</span>`;
  aboutListItems[1].innerHTML = `<i class="bi bi-chevron-right"></i> <strong>${data.cityLabel}</strong> <span>${data.city}</span>`;
  aboutListItems[2].innerHTML = `<i class="bi bi-chevron-right"></i> <strong>${data.freelanceLabel}</strong> <span>${data.freelanceStatus}</span>`;
}
