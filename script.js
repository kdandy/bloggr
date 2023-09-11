// burger element
const burger = document.querySelector("#burger-menu");
const menu = document.querySelector("#menu");
const burgerIcon = document.querySelector("#burger-icon");
let closeImg = false;
burger.addEventListener("click", () => {
  closeImg = !closeImg;
  if (closeImg) {
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
    burgerIcon.src = "./images/icon-close.svg";
  } else {
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
    burgerIcon.src = "./images/icon-hamburger.svg";
  }
});

// fixed nav
window.onscroll = function () {
  const header = document.querySelector("header");
  if (window.scrollY > 72) {
    header.classList.add("fixed-nav");
  } else {
    header.classList.remove("fixed-nav");
  }
};

// dropdown 1
const connect1 = document.querySelector("#connect1");
const subConnect1 = document.querySelector("#sub-connect1");
const arrows1 = document.querySelector(".arrow1");
let arrowConnect1 = false;
connect1.addEventListener("click", firstConnect);
function firstConnect(e) {
  e.preventDefault();
  arrowConnect1 = !arrowConnect1;
  if (arrowConnect1) {
    subConnect1.classList.toggle("flex");
    subConnect1.classList.toggle("hidden");
    arrows1.classList.add("up");
  } else {
    subConnect1.classList.toggle("flex");
    subConnect1.classList.toggle("hidden");
    arrows1.classList.remove("up");
  }
}

// mobile dropdown 1
const mobileConnect1 = document.querySelector("#m-connect1");
const mobileSubConnect1 = document.querySelector("#m-sub-connect1");
const mobileArrows1 = document.querySelector(".m-arrow1");
let mobileArrowConnect1 = false;
mobileConnect1.addEventListener("click", mobileFirstConnect);
function mobileFirstConnect(e) {
  e.preventDefault();
  mobileArrowConnect1 = !mobileArrowConnect1;
  if (mobileArrowConnect1) {
    mobileSubConnect1.classList.toggle("flex");
    mobileSubConnect1.classList.toggle("hidden");
    mobileArrows1.classList.add("up");
  } else {
    mobileSubConnect1.classList.toggle("flex");
    mobileSubConnect1.classList.toggle("hidden");
    mobileArrows1.classList.remove("up");
  }
}

// dropdown 2
const connect2 = document.querySelector("#connect2");
const subConnect2 = document.querySelector("#sub-connect2");
const arrows2 = document.querySelector(".arrow2");
let arrowConnect2 = false;
connect2.addEventListener("click", secondConnect);
function secondConnect(e) {
  e.preventDefault();
  arrowConnect2 = !arrowConnect2;
  if (arrowConnect2) {
    subConnect2.classList.toggle("flex");
    subConnect2.classList.toggle("hidden");
    arrows2.classList.add("up");
  } else {
    subConnect2.classList.toggle("flex");
    subConnect2.classList.toggle("hidden");
    arrows2.classList.remove("up");
  }
}

// mobile dropdown 2
const mobileConnect2 = document.querySelector("#m-connect2");
const mobileSubConnect2 = document.querySelector("#m-sub-connect2");
const mobileArrows2 = document.querySelector(".m-arrow2");
let mobileArrowConnect2 = false;
mobileConnect2.addEventListener("click", mobileSecondConnect);
function mobileSecondConnect(e) {
  e.preventDefault();
  mobileArrowConnect2 = !mobileArrowConnect2;
  if (mobileArrowConnect2) {
    mobileSubConnect2.classList.toggle("flex");
    mobileSubConnect2.classList.toggle("hidden");
    mobileArrows2.classList.add("up");
  } else {
    mobileSubConnect2.classList.toggle("flex");
    mobileSubConnect2.classList.toggle("hidden");
    mobileArrows2.classList.remove("up");
  }
}

// dropdown 3
const connect3 = document.querySelector("#connect3");
const subConnect3 = document.querySelector("#sub-connect3");
const arrows3 = document.querySelector(".arrow3");
let arrowConnect3 = false;
connect3.addEventListener("click", thirdConnect);
function thirdConnect(e) {
  e.preventDefault();
  arrowConnect3 = !arrowConnect3;
  if (arrowConnect3) {
    subConnect3.classList.toggle("flex");
    subConnect3.classList.toggle("hidden");
    arrows3.classList.add("up");
  } else {
    subConnect3.classList.toggle("flex");
    subConnect3.classList.toggle("hidden");
    arrows3.classList.remove("up");
  }
}

// mobile dropdown 3
const mobileConnect3 = document.querySelector("#m-connect3");
const mobileSubConnect3 = document.querySelector("#m-sub-connect3");
const mobileArrows3 = document.querySelector(".m-arrow3");
let mobileArrowConnect3 = false;
mobileConnect3.addEventListener("click", mobileThirdConnect);
function mobileThirdConnect(e) {
  e.preventDefault();
  mobileArrowConnect3 = !mobileArrowConnect3;
  if (mobileArrowConnect3) {
    mobileSubConnect3.classList.toggle("flex");
    mobileSubConnect3.classList.toggle("hidden");
    mobileArrows3.classList.add("up");
  } else {
    mobileSubConnect3.classList.toggle("flex");
    mobileSubConnect3.classList.toggle("hidden");
    mobileArrows3.classList.remove("up");
  }
}
