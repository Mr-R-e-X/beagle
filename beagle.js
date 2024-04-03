const slides = document.querySelectorAll("#img-container img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currIndex = 0;
let slideInterval;
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  currIndex++;
  if (currIndex >= slides.length) {
    currIndex = 0;
  }
  showSlide(currIndex);
}

function prevSlide() {
  currIndex--;
  if (currIndex < 0) {
    currIndex = slides.length - 1;
  }
  showSlide(currIndex);
}

function startSlider() {
  slideInterval = setInterval(nextSlide, 2000);
}

function stopSlider() {
  if (slideInterval !== undefined) {
    clearInterval(slideInterval);
  }
}
prevBtn.addEventListener("click", () => {
  stopSlider();
  prevSlide();
  startSlider();
});
nextBtn.addEventListener("click", () => {
  stopSlider();
  nextSlide();
  startSlider();
});
showSlide(currIndex);
startSlider();
