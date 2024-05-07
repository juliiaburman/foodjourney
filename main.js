//scroll arrow button
const arrowDown = document.querySelector(".arrow");
arrowDown.addEventListener("click", scrollDownFunction);

function scrollDownFunction() {
  window.scrollTo({
    top: 700,
    behavior: "smooth",
  });
}

//To top button
const toTop = document.querySelector(".to-top");
toTop.addEventListener("click", toTopFunction);

function toTopFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 100) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
}

//Scroll to continents
const northAmerica = document.querySelector(".title-one");
northAmerica.addEventListener("click", northAmericaFunction);

function northAmericaFunction() {
  window.scrollTo({
    top: 2100,
    behavior: "smooth",
  });
}

const southAmerica= document.querySelector(".title-two");
southAmerica.addEventListener("click", southAmericaFunction);

function southAmericaFunction() {
  window.scrollTo({
    top: 5750,
    behavior: "smooth",
  });
}

const europe= document.querySelector(".title-three");
europe.addEventListener("click", europeFunction);

function europeFunction() {
  window.scrollTo({
    top: 7000,
    behavior: "smooth",
  });
}

const africa= document.querySelector(".title-four");
africa.addEventListener("click", africaFunction);

function africaFunction() {
  window.scrollTo({
    top: 15555,
    behavior: "smooth",
  });
}

const asia= document.querySelector(".title-five");
asia.addEventListener("click", asiaFunction);

function asiaFunction() {
  window.scrollTo({
    top: 18020,
    behavior: "smooth",
  });
}

const oceania= document.querySelector(".title-six");
oceania.addEventListener("click", oceaniaFunction);

function oceaniaFunction() {
  window.scrollTo({
    top: 25100,
    behavior: "smooth",
  });
}

//Scroll to countries
const australia = document.querySelector(".title-six-content");
australia.addEventListener("click", australiaFunction);

function australiaFunction() {
  window.scrollTo({
    top: 25825,
    behavior: "smooth",
  });
}