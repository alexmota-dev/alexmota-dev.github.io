const skills = [
  { name: "Java", value: 95 },
  { name: "Spring Boot", value: 70 },
  { name: "C#", value: 90 },
  { name: ".NET", value: 70 },
  { name: "SQL", value: 75 },
  { name: "Typescript", value: 80 },
  { name: "Node JS", value: 80 },
  { name: "ReactJS", value: 94 },
  { name: "Python", value: 90 },
  { name: "HTML", value: 95 },
  { name: "CSS", value: 90 },
  { name: "JavaScript", value: 85 },
];

const skillsContainer = document.querySelector(".skills-content");
const column1 = document.createElement("div");
column1.classList.add("col-lg-6");
column1.setAttribute("data-aos", "fade-up");

const column2 = document.createElement("div");
column2.classList.add("col-lg-6");
column2.setAttribute("data-aos", "fade-up");
column2.setAttribute("data-aos-delay", "100");

skills.forEach((skill, index) => {
  const skillElement = document.createElement("div");
  skillElement.classList.add("progress");
  skillElement.innerHTML = `
    <span class="skill">${skill.name} <i class="val">${skill.value}%</i></span>
    <div class="progress-bar-wrap">
      <div class="progress-bar" role="progressbar" aria-valuenow="${skill.value}" aria-valuemin="0" aria-valuemax="100" data-value="${skill.value}" style="width: 0;"></div>
    </div>
  `;

  if (index < Math.ceil(skills.length / 2)) {
    column1.appendChild(skillElement);
  } else {
    column2.appendChild(skillElement);
  }
});

skillsContainer.appendChild(column1);
skillsContainer.appendChild(column2);

// Função para animar as barras
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    let value = bar.getAttribute("data-value");
    let width = 0;
    let speed = value / 50; // Define a velocidade da animação

    let interval = setInterval(() => {
      if (width >= value) {
        clearInterval(interval);
      } else {
        width++;
        bar.style.width = width + "%";
      }
    }, 15); // Intervalo de atualização da animação
  });
}

// Ativa a animação quando a seção entra na tela
function onScrollAnimate() {
  const section = document.querySelector(".skills-content");
  const sectionPosition = section.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    animateProgressBars();
    window.removeEventListener("scroll", onScrollAnimate);
  }
}

window.addEventListener("scroll", onScrollAnimate);