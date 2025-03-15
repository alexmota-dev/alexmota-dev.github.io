const skills = [
  
  { name: "Spring Boot", value: 2 },
  { name: ".NET", value: 2 },
  { name: "Node.js", value: 3 },
  { name: "C#", value: 3 },
  { name: "Java", value: 4 },
  { name: "SQL", value: 3 },
  { name: "Typescript", value: 3 },
  { name: "Node JS", value: 3 },
  { name: "ReactJS", value: 3 },
  { name: "HTML", value: 4. },
  { name: "CSS", value: 4 },
  { name: "JavaScript", value: 4 },
];

const MAX_YEARS = 6;
const skillsContainer = document.querySelector(".skills-content");

const column1 = document.createElement("div");
column1.classList.add("col-lg-6");
column1.classList.add("column");
column1.setAttribute("data-aos", "fade-up");

const column2 = document.createElement("div");
column2.classList.add("col-lg-6");
column1.classList.add("column");
column2.setAttribute("data-aos", "fade-up");
column2.setAttribute("data-aos-delay", "100");

skills.forEach((skill, index) => {
  const skillElement = document.createElement("div");
  skillElement.classList.add("progress");

  const widthPercentage = (skill.value / MAX_YEARS) * 100;

  skillElement.innerHTML = `
    <span class="skill">${skill.name} <i class="skillValue val">${skill.value} years</i></span>

    <div class="progress-bar-wrap">
      <div class="progress-bar" role="progressbar" aria-valuenow="${skill.value}" 
           aria-valuemin="0" aria-valuemax="${MAX_YEARS}" data-value="${widthPercentage}" 
           style="width: 0;"></div>
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

function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    let value = parseFloat(bar.getAttribute("data-value"));
    let width = 0;
    let speed = value / 50;

    let interval = setInterval(() => {
      if (width >= value) {
        clearInterval(interval);
      } else {
        width++;
        bar.style.width = width + "%";
      }
    }, 15);
  });
}

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
