const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const header = document.querySelector("header");
const main = document.querySelector("main");
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const searchIconMobile = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");
const overlay = document.getElementById("overlay");
const searchContainer = document.querySelector(".search-input-container");

const hamburgerBtn = document.querySelector(".hamburger-icon");
const navBar = document.querySelector("nav");
const menuLink = document.querySelectorAll(".menu-bar-link");
const menuChevron = document.querySelectorAll(".menu-chevron");
const menuBackArrow = document.querySelectorAll(".menu-arrow-back");
const subMenu = document.querySelector(".menu-sub");
const menuItem = document.querySelectorAll(".menu-item");

const expandList = [].slice.call(document.querySelectorAll(".nav-expand"));
const expandLink = document.querySelectorAll(".nav-expand-link");
const expendContent = document.querySelectorAll(".nav-expand-content");

const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
   Back
	</a>
</li>`;

const mql = window.matchMedia("(min-width: 992px)");
const mobileReset = window.matchMedia("(max-width: 992px)");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

//Sticky navbar

//Search input

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.classList.toggle("opacity");
});

let isVisible = false;

searchIconMobile.addEventListener("click", () => {
  if (!isVisible) {
    searchForm.classList.add("display");
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
    isVisible = !isVisible;
  } else {
    searchForm.classList.remove("display");
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
    isVisible = !isVisible;
  }
});

searchIconMobile.addEventListener("click", () => {
  if ((navBar.classList.contains = "navdisplay")) {
    navBar.classList.remove("nav-display");
  }
});

document.addEventListener("mouseup", function (e) {
  if (!searchForm.contains(e.target)) {
    searchForm.classList.remove("display");
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
  }
});

document.addEventListener("mouseup", function (e) {
  if (!searchContainer.contains(e.target)) {
    searchInput.classList.add("opacity");
  }
});

//Tabs section

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

//Hero Slider
let timer;
var slideIndex = 0;
showSlides();
var slides;

function showSlides() {
  var i;
  slides = document.querySelectorAll(".slide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "flex";
  timer = setTimeout(showSlides, 5000);
}

function myStopFunction() {
  clearTimeout(timer);
  timer = setTimeout(showSlides, 5000);
}

function plusSlides(position) {
  myStopFunction();
  slideIndex += position;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

//Hamburger menu

mobileReset.onchange = (e) => {
  if (e.matches) {
    hamburgerBtn.classList.remove("active");
    navBar.classList.remove("nav-display");
  }
};

mql.onchange = (e) => {
  if (e.matches) {
    expendContent.forEach((content) => {
      content.style.transform = "translateX(0%)";
    });
  }
};

hamburgerBtn.addEventListener("click", () => {
  expendContent.forEach((content) => {
    content.style.transform = "translateX(-100%)";
  });
  hamburgerBtn.classList.toggle("active");
  navBar.classList.toggle("nav-display");
});

expandList.forEach((item) => {
  item
    .querySelector(".nav-expand-content")
    .insertAdjacentHTML("afterbegin", backLink);

  item
    .querySelector(".nav-expand-link")
    .addEventListener(
      "click",
      () =>
        (item.querySelector(".nav-expand-content").style.transform =
          "translateX(0%)")
    );
  item
    .querySelector(".nav-back-link")
    .addEventListener(
      "click",
      () =>
        (item.querySelector(".nav-expand-content").style.transform =
          "translateX(-100%)")
    );
});
