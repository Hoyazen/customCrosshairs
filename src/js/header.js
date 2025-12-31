const header = document.querySelector("header");
const burger = document.querySelector(".burger");
const burgerClose = document.querySelector(".burger-close");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 10) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
}

if (header && burger && burgerClose) {
  burger.addEventListener("click", () => {
    header.classList.add("menu-open");
  });

  burgerClose.addEventListener("click", () => {
    header.classList.remove("menu-open");
  });
}
