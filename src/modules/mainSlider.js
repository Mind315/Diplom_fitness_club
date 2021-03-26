"use strict";

const mainSlider = () => {

   const allSlides = document.querySelectorAll('.wrapper .main-slider .slide');
   let currentSlide = 0,
      interval;

   const autoPlaySlide = () => {
      allSlides[currentSlide].style.display = 'none';
      currentSlide++;
      if (currentSlide >= allSlides.length){
         currentSlide = 0;
      }
      allSlides[currentSlide].style.display = 'flex';
   };

   const startSlide = (time = 1500) => {
      
      interval = setInterval(autoPlaySlide, time);
    };
   startSlide();
};


export default mainSlider;