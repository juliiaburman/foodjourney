//scroll arrow button
const arrowDown = document.querySelector(".arrow");
arrowDown.addEventListener("click", scrollDownFunction);

function scrollDownFunction() {
  window.scrollTo({
    top: 800,
    behavior: "smooth",
  });
}

//Scroll to continents
const northAmerica = document.querySelector(".title-one");
northAmerica.addEventListener("click", northAmericaFunction);

function northAmericaFunction() {
  window.scrollTo({
    top: 2280,
    behavior: "smooth",
  });
}

const southAmerica= document.querySelector(".title-two");
southAmerica.addEventListener("click", southAmericaFunction);

function southAmericaFunction() {
  window.scrollTo({
    top: 5950,
    behavior: "smooth",
  });
}

const europe= document.querySelector(".title-three");
europe.addEventListener("click", europeFunction);

function europeFunction() {
  window.scrollTo({
    top: 7220,
    behavior: "smooth",
  });
}

const africa= document.querySelector(".title-four");
africa.addEventListener("click", africaFunction);

function africaFunction() {
  window.scrollTo({
    top: 15435,
    behavior: "smooth",
  });
}

const asia= document.querySelector(".title-five");
asia.addEventListener("click", asiaFunction);

function asiaFunction() {
  window.scrollTo({
    top: 17920,
    behavior: "smooth",
  });
}

const oceania= document.querySelector(".title-six");
oceania.addEventListener("click", oceaniaFunction);

function oceaniaFunction() {
  window.scrollTo({
    top: 25030,
    behavior: "smooth",
  });
}

//Scroll to countries
const cuba = document.querySelector(".title-one-content-cuba");
cuba.addEventListener("click", cubaFunction);

function cubaFunction() {
  window.scrollTo({
    top: 3010,
    behavior: "smooth",
  });
}

const mexico = document.querySelector(".title-one-content-mexico");
mexico.addEventListener("click", mexicoFunction);

function mexicoFunction() {
  window.scrollTo({
    top: 3960,
    behavior: "smooth",
  });
}

const us = document.querySelector(".title-one-content-us");
us.addEventListener("click", usFunction);

function usFunction() {
  window.scrollTo({
    top: 5160,
    behavior: "smooth",
  });
}

const chile = document.querySelector(".title-two-content");
chile.addEventListener("click", chileFunction);

function chileFunction() {
  window.scrollTo({
    top: 6590,
    behavior: "smooth",
  });
}

const england = document.querySelector(".title-three-content-england");
england.addEventListener("click", englandFunction);

function englandFunction() {
  window.scrollTo({
    top: 7960,
    behavior: "smooth",
  });
}

const france = document.querySelector(".title-three-content-france");
france.addEventListener("click", franceFunction);

function franceFunction() {
  window.scrollTo({
    top: 9155,
    behavior: "smooth",
  });
}

const germany = document.querySelector(".title-three-content-germany");
germany.addEventListener("click", germanyFunction);

function germanyFunction() {
  window.scrollTo({
    top: 9980,
    behavior: "smooth",
  });
}

const greece = document.querySelector(".title-three-content-greece");
greece.addEventListener("click", greeceFunction);

function greeceFunction() {
  window.scrollTo({
    top: 10850,
    behavior: "smooth",
  });
}

const iceland = document.querySelector(".title-three-content-iceland");
iceland.addEventListener("click", icelandFunction);

function icelandFunction() {
  window.scrollTo({
    top: 12270,
    behavior: "smooth",
  });
}

const italy = document.querySelector(".title-three-content-italy");
italy.addEventListener("click", italyFunction);

function italyFunction() {
  window.scrollTo({
    top: 13210,
    behavior: "smooth",
  });
}

const sweden = document.querySelector(".title-three-content-sweden");
sweden.addEventListener("click", swedenFunction);

function swedenFunction() {
  window.scrollTo({
    top: 14655,
    behavior: "smooth",
  });
}

const egypt = document.querySelector(".title-four-content-egypt");
egypt.addEventListener("click", egyptFunction);

function egyptFunction() {
  window.scrollTo({
    top: 16200,
    behavior: "smooth",
  });
}

const southAfrica = document.querySelector(".title-four-content-south-africa");
southAfrica.addEventListener("click", southAfricaFunction);

function southAfricaFunction() {
  window.scrollTo({
    top: 17175,
    behavior: "smooth",
  });
}

const china = document.querySelector(".title-five-content-china");
china.addEventListener("click", chinaFunction);

function chinaFunction() {
  window.scrollTo({
    top: 18679,
    behavior: "smooth",
  });
}

const india = document.querySelector(".title-five-content-india");
india.addEventListener("click", indiaFunction);

function indiaFunction() {
  window.scrollTo({
    top: 19620,
    behavior: "smooth",
  });
}

const indonesia = document.querySelector(".title-five-content-indonesia");
indonesia.addEventListener("click", indonesiaFunction);

function indonesiaFunction() {
  window.scrollTo({
    top: 21010,
    behavior: "smooth",
  });
}

const japan = document.querySelector(".title-five-content-japan");
japan.addEventListener("click", japanFunction);

function japanFunction() {
  window.scrollTo({
    top: 21900,
    behavior: "smooth",
  });
}

const russia = document.querySelector(".title-five-content-russia");
russia.addEventListener("click", russiaFunction);

function russiaFunction() {
  window.scrollTo({
    top: 22730,
    behavior: "smooth",
  });
}

const thailand = document.querySelector(".title-five-content-thailand");
thailand.addEventListener("click", thailandFunction);

function thailandFunction() {
  window.scrollTo({
    top: 24255,
    behavior: "smooth",
  });
}

const australia = document.querySelector(".title-six-content");
australia.addEventListener("click", australiaFunction);

function australiaFunction() {
  window.scrollTo({
    top: 25805,
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