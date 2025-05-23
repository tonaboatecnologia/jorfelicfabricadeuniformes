let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    document.querySelector(".slider-container").style.transform = 
        `translateX(-${currentIndex * 100}vw)`;
}

/* Auto Slide a cada 4 segundos */
setInterval(() => moveSlide(1), 4000);
