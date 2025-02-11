function buildServicesSectionForJson(data) {
  document.querySelector("#services .section-title h2").innerText = data.sectionTitle;

  const serviceBoxes = document.querySelectorAll("#services .icon-box");

  serviceBoxes[0].querySelector(".title a").innerText = data.services[0].title;
  serviceBoxes[0].querySelector(".description").innerText = data.services[0].description;

  serviceBoxes[1].querySelector(".title a").innerText = data.services[1].title;
  serviceBoxes[1].querySelector(".description").innerText = data.services[1].description;

  serviceBoxes[2].querySelector(".title a").innerText = data.services[2].title;
  serviceBoxes[2].querySelector(".description").innerText = data.services[2].description;
}