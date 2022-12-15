const slides = document.querySelectorAll('.glide__slide');
let currentSlide = 0;
let slideLength = slides.length;
let prevSlide = slides.length - 1;

window.setInterval(function() {
    // if (currentSlide >= slideLength)
    //   currentSlide = 0;
  
    
    // slides[prevSlide].classList.remove("slide_active");
    // slides[currentSlide].classList.add("slide_active");

    slides[prevSlide].style.display =  "none";
    slides[currentSlide].style.display = "block";
  
    prevSlide = currentSlide;
    currentSlide = (currentSlide+1) % slides.length;
  
  }, 2000);