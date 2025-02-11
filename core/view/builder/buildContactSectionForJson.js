function buildContactSectionForJson(data) {
  document.querySelector("#contact .section-title h2").innerText = data.sectionTitle;
  document.querySelector("#contact .section-title p").innerText = data.description;

  document.querySelector("#contact .address h4").innerText = data.locationTitle;
  document.querySelector("#contact .address p").innerText = data.location;

  document.querySelector("#contact .email h4").innerText = data.emailTitle;
  document.querySelector("#contact .email p").innerText = data.email;

  document.querySelector("#contact .linkedin h4").innerText = data.linkedinTitle;
  document.querySelector("#contact .linkedin p a").innerText = data.linkedin;
}