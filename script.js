// Hamburger Menu Click
const hamburger = document.querySelector("#hamburger");
const navbarNav = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  navbarNav.classList.toggle("active");
});

// Search Click
const search = document.querySelector("#search");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

search.addEventListener("click", function (e) {
  e.preventDefault();
  searchForm.classList.toggle("active");
  searchBox.focus();
});

const shoppingBag = document.querySelector("#shopping");
const shoppingCart = document.querySelector(".shopping-cart");

shoppingBag.addEventListener("click", function (e) {
  e.preventDefault();
  shoppingCart.classList.toggle("active");
});

//klik di luar untuk menghilangkan
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shoppingBag.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-icon");
const itemDetailBtn = document.querySelectorAll(".kost-card-button");

itemDetailBtn.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "none";
});

//modal close on click outside

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
