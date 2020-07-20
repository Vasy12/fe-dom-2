"use strict";

const carousel = new Carousel([
  new Slide(
    "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
    "eye"
  ),
  new Slide(
    "https://p.bigstockphoto.com/jdVZ6zirQdGjAE2vCmmK_bigstock-A-Telltale-Sign-Of-Summer-Hyd-272112430.jpg",
    "flowers"
  ),
  new Slide(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpMnac1yECLCcLuaX2TNZXKny4LpifGgMcGQ&usqp=CAU",
    "railway"
  ),
  new Slide(
    "https://d.newsweek.com/en/full/772816/1-5-jupiter-nasa.jpg",
    "jupiter"
  ),
]);

const [prevBtn, nextBtn] = document.querySelectorAll(".carouselBtn");

/**
 *
 * @param {'next'|'prev'} direction
 */
const createSliderClickHandler = (direction = "next") => (e) => {
  carousel.currentIndex =
    carousel[direction === "next" ? "nextIndex" : "prevIndex"];
  updateSlideImage(direction);
};

prevBtn.addEventListener("click", createSliderClickHandler("prev"));

nextBtn.addEventListener("click", createSliderClickHandler("next"));

updateSlideImage();

function updateSlideImage(direction) {
  const oldCurrentImage = document.querySelector(".currentImage");
  const newCurrentImage = document.querySelector(".nextImage");

  const currentSlide = carousel.currentSlide;
  const nextSlide = carousel[direction === "next" ? "nextSlide" : "prevSlide"];

  newCurrentImage.classList.replace("nextImage", "currentImage");
  oldCurrentImage.classList.replace("currentImage", "nextImage");

  newCurrentImage.setAttribute("src", currentSlide.src);
}
