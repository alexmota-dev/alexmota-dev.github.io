function buildPortfolioSectionForJson(data) {
  document.querySelector("#projects .section-title h2").innerText = data.sectionTitle;
  document.querySelector("#projects .section-title p").innerText = data.description;

  const filters = document.querySelectorAll("#portfolio-flters li");
  filters[0].innerText = data.filters.all;
  filters[1].innerText = data.filters.app;
  filters[2].innerText = data.filters.technology;
  filters[3].innerText = data.filters.webDesign;
}