const showMore = document.querySelectorAll(".show-more");
let productNumber = document.getElementById("value");

const showMoreBtn = document.querySelector(".show-more-btn");
const hiddenProducts = [...document.querySelectorAll(".item.hidden")];

const productsCountElem = document.getElementById("products-count");
const productsTotalElem = document.querySelectorAll(".products-total");

const productsLimit = 22;

productsTotalElem.forEach((total) => {
  total.innerHTML = productsLimit;
});

function myFunction() {
  let i = 4;
  let d = parseInt(document.getElementById("products-count").innerHTML);
  if (d < productsLimit) {
    document.getElementById("products-count").innerHTML = d + i;

    if (d + i === productsLimit) {
      showMoreBtn.disabled = "true";
      showMoreBtn.classList.add("disabled");
    }
  }
}

hiddenProducts.splice(0, 4).forEach((elem) => elem.classList.remove("hidden"));

showMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  myFunction();
  hiddenProducts
    .splice(0, 4)
    .forEach((elem) => elem.classList.remove("hidden"));
});

//Drag when screen is smaller

const slider = document.querySelector(".slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
});
slider.addEventListener("mouseup", () => {
  isDown = false;
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});
