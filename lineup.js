let slideIndex = 0;

const slider = document.querySelector(".lineup-slider");
const slides = document.getElementsByClassName("lineup-card");
const nextBtn = document.getElementById("lineup-next");
const prevBtn = document.getElementById("lineup-prev");

const slideWidth = slides[0].offsetWidth + 20;

function showSlides(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slider.scrollTo({
    left: slideIndex * slideWidth,
    behavior: "smooth"
  });
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

nextBtn.addEventListener("click", function () {
  plusSlides(1);
});

prevBtn.addEventListener("click", function () {
  plusSlides(-1);
});