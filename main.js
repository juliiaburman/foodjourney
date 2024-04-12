//scroll arrow button
const arrowDown = document.querySelector(".arrow");
arrowDown.addEventListener("click", scrollDownFunction);

function scrollDownFunction() {
  window.scrollTo({
    top: 700,
    behavior: "smooth",
  })
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
