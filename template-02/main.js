
// btn up
let upBtn = document.querySelector(".up-btn");
document.addEventListener("scroll", function () {
  if (window.scrollY >= 1000) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
})
upBtn.addEventListener("click", function () {
  window.scrollTo(0, 0)
});


let iRight = document.querySelector(".testimonials .right");
let iLeft = document.querySelector(".testimonials .left");
let bars = document.querySelectorAll(".bars-child");
let boxDiv = document.querySelectorAll(".testimonials .data");


iRight.addEventListener("click", function () {
  const itemsArray = Array.from(bars);
  const activeIndex = itemsArray.findIndex(bars => bars.classList.contains('active'));
  if (activeIndex >= 0 && activeIndex < 2) {
    bars[activeIndex].classList.remove("active");
    bars[activeIndex + 1].classList.add("active");
    boxDiv[activeIndex].classList.add("hidden");
    boxDiv[activeIndex + 1].classList.remove("hidden");
  }
})
iLeft.addEventListener("click", function () {
  const itemsArray = Array.from(bars);
  const activeIndex = itemsArray.findIndex(bars => bars.classList.contains('active'));
  if (activeIndex >= 1 && activeIndex < 3) {
    bars[activeIndex].classList.remove("active");
    bars[activeIndex - 1].classList.add("active");
    boxDiv[activeIndex].classList.add("hidden");
    boxDiv[activeIndex - 1].classList.remove("hidden");
  }
})




let op = new Date();
