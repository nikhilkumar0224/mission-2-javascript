console.log("🔗");

// Change colour of portofolio

const headerDiv = document.querySelector(".header-class");
headerDiv.addEventListener("mouseover", function () {
  headerDiv.style.color = "#02a0e9";
});

headerDiv.addEventListener("mouseout", function () {
  headerDiv.style.color = "black";
});

// change color of about me

const aboutDiv = document.querySelector(".about-class");
aboutDiv.addEventListener("mouseover", function () {
  aboutDiv.style.color = "#02a0e9";
});

aboutDiv.addEventListener("mouseout", function () {
  aboutDiv.style.color = "black";
});

// change colour of Contact me

const contactDiv = document.querySelector(".contact-class");
contactDiv.addEventListener("mouseover", function () {
  contactDiv.style.color = "#02a0e9";
});

contactDiv.addEventListener("mouseout", function () {
  contactDiv.style.color = "black";
});

// Languages

const languages = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Node.js",
  "MongoDB",
  "MySQL",
];

let currentlang = 0;

const lang = document.getElementById("lang");
const nextButton = document.getElementById("nextLang");

function nextLang() {
  currentlang++;

  if (currentlang >= languages.length) {
    currentlang = 0;
  }

  lang.textContent = languages[currentlang];
}

nextButton.addEventListener("click", nextLang);
