if (document.querySelector(".burger")) {
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", function () {
    document.documentElement.classList.toggle("navbar-active");
  });

  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 32) {
      document.documentElement.classList.add("navbar-sticky");
    } else {
      document.documentElement.classList.remove("navbar-sticky");
    }
  });
}
