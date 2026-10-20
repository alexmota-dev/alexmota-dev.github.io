const projects = [
  {
    title: "Chance Sports - React",
    category: "Web_Design",
    image: "web/chance-sports.png",
    url: "https://chancesports.com.br/",
    cover: true
  },
  {
    title: "Chance Sports - Node",
    category: "Technology",
    image: "api/chancesports-back-api.png",
    url: "https://chancesports.com.br/"
  },
  {
    title: "Dama - React",
    category: "Web_Design",
    image: "web/dama-front-web.png",
    cover: true
  },
  { title: "Dama - Spring Boot", category: "Technology", image: "api/dama-back-api.png" },
  { title: "Programa Indique e Ganhe - React", category: "Web_Design", image: "web/programaindiqueeganhe-login.png" },
  { title: "Programa Indique e Ganhe - React", category: "Web_Design", image: "web/programaindiqueeganhe-register.png" },
  { title: "Programa Indique e Ganhe - Spring Boot", category: "Technology", image: "api/Authentication.jpg" },
  { title: "BoraLá - React Native", category: "App", image: "mobile/borala-wallet.png" },
  { title: "BoraLá - React Native", category: "App", image: "mobile/borala-races.png" },
  { title: "BoraLá - React Native", category: "App", image: "mobile/borala-map.png" },
];

const portfolioContainer = document.querySelector(".portfolio-container");

projects.forEach(({ title, category, image, url, cover }) => {
  const detailsUrl = url || "https://github.com/alexmota-dev";
  const projectHTML = `
  <div class="col-lg-4 col-md-6 portfolio-item filter-${category.replace(' ', '_')}">
    <div class="portfolio-wrap">
      <img src="img/Projects/${image}" class="img-fluid${cover ? " portfolio-cover" : ""}" alt="${title}">
      <div class="portfolio-links">
        <a href="img/Projects/${image}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${title}">
          <i class="bx bx-plus"></i>
        </a>
        <a href="${detailsUrl}" target="_blank" rel="noopener noreferrer" title="${title}">
          <i class="bx bx-link"></i>
        </a>
      </div>
    </div>
    <div class="portfolio-info">
      <h4>${title}</h4>
    </div>
  </div>
  `;
  portfolioContainer.innerHTML += projectHTML;
});