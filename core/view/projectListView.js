const projects = [
  { title: "React - Full Stack Project", category: "Web_Design", image: "web/programaindiqueeganhe-login.png" },
  { title: "React - Full Stack Project", category: "Web_Design", image: "web/programaindiqueeganhe-register.png" },
  { title: "React - Full Stack Project", category: "Technology", image: "api/Authentication.jpg" },
  { title: "React Native - BoraLá - Mobilidade", category: "App", image: "mobile/borala-wallet.png" },
  { title: "React Native - BoraLá - Mobilidade", category: "App", image: "mobile/borala-races.png" },
  { title: "React Native - BoraLá - Mobilidade", category: "App", image: "mobile/borala-map.png" },
];

const portfolioContainer = document.querySelector(".portfolio-container");

projects.forEach(({ title, category, image }) => {
  const projectHTML = `
  <div class="col-lg-4 col-md-6 portfolio-item filter-${category.replace(' ', '_')}">
    <div class="portfolio-wrap">
      <img src="img/projects/${image}" class="img-fluid" alt="${title}">
      <div class="portfolio-links">
        <a href="img/projects/${image}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${title}">
          <i class="bx bx-plus"></i>
        </a>
        <a href="https://github.com/alexmota-dev" title="More Details">
          <i class="bx bx-link"></i>
        </a>
      </div>
    </div>
  </div>
  `;
  portfolioContainer.innerHTML += projectHTML;
});