function buildHeaderSectionForJson(data) {
  document.querySelector("#header .profile h1").innerText = data.profileName;

  document.querySelector(".header-home").innerText = data.home;
  document.querySelector(".header-about").innerText = data.about;
  document.querySelector(".header-resume").innerText = data.resume;
  document.querySelector(".header-projects").innerText = data.projects;
  document.querySelector(".header-services").innerText = data.services;
  document.querySelector(".header-contact").innerText = data.contact;

  document.querySelector("#header .social-links .google-plus").setAttribute('title', data.github);
  document.querySelector("#header .social-links .linkedin").setAttribute('title', data.linkedin);
}
