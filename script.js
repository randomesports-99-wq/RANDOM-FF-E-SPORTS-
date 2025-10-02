// script.js (optional enhancement)
let slides = document.querySelector(".slides");
let index = 0;

setInterval(() => {
  index = (index + 1) % 3; // 3 টা ইমেজ আছে
  slides.style.transform = `translateX(-${index * 100}%)`;
  slides.style.transition = "transform 1s ease";
}, 4000);
