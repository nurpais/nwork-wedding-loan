if (document.querySelector(".faq-accordion")) {
  const accordions = document.querySelectorAll(".faq-accordion");

  accordions.forEach(function (el) {
    el.addEventListener("click", function () {
      this.classList.toggle("faq-accordion--active");
    });
  });
}
