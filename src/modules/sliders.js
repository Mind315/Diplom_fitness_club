"use strict";


export default class Sliders {

    constructor(main, slide) {
         this.mainSlider = document.querySelector(main);
         this.sliders = this.mainSlider.querySelectorAll(slide);
         this.dot = null;
         this.currentSlide = 0;
         this.interval = null;
    }

    hideFotos(visible) {
      if (!visible) {
          this.sliders.forEach((slide, index) => {
              if (index !== 0)   slide.style.display = 'none';});
      } else {
          this.sliders.forEach((slide, index) => {
              if (index > 4 && index < this.sliders.length) 
                  slide.style.display = 'none';
          });
      }
  }

    addArrow(direction, imgArrow) {
        this.mainSlider.setAttribute('id', 'wrapper');
        this.mainSlider.insertAdjacentHTML('beforeend', `
            <a href="#" class="slider-arrow ${direction}"><span data-arrow="${direction}">
            <img src='${imgArrow}' data-arrow="${direction}"><img></span></a>
            `);
    }

    dots(dotClass) {
        this.mainSlider.style.position = 'relative';
        this.mainSlider.insertAdjacentHTML('beforeend', `<ul class=${dotClass}></ul>`);

        this.dot = this.mainSlider.querySelector(`.${dotClass}`);

        this.sliders.forEach(() => {
            this.dot.insertAdjacentHTML('beforeend', `<li><button></button></li>`);
        });

    }
   


    prevSlide(elem, index, dotClass) {
        if (elem[index].matches('div')) {
            elem[index].style.display = 'none';
        } else {
            elem[index].classList.remove(dotClass);
        }
    }

    nextSlide(elem, index, dotClass) {
        if (elem[index].matches('div')) {
            elem[index].style.display = 'flex';
        } else {
            elem[index].classList.add(dotClass);
        }
    }

    autoPlaySlide() {

        this.prevSlide(this.sliders, this.currentSlide);
        this.prevSlide(this.dot.children, this.currentSlide, 'slick-active');
      
        this.currentSlide++;
        if (this.currentSlide > this.sliders.length - 1) {
            this.currentSlide = 0;
        }

        this.nextSlide(this.sliders, this.currentSlide);
        this.nextSlide(this.dot.children, this.currentSlide, 'slick-active');
       
    }

    startSlide(time = 2000) {
        this.interval = setInterval(this.autoPlaySlide.bind(this), time);
    }
    stopSlide() {
        clearInterval(this.interval);
    }

    mouseEvent() {
        this.mainSlider.addEventListener('mouseover', (event) => {

            if (event.target.matches('img, li, span')) {
                this.stopSlide();
            }
        });

        this.mainSlider.addEventListener('mouseout', (event) => {
            if (event.target.matches('img, button')) {
                this.startSlide();
            }
        });
    }

    clickAutoSlider() {

        this.mainSlider.parentElement.addEventListener('click', (e) => {

            e.preventDefault();
            this.dot = this.mainSlider.querySelector('.slider-dots');
            const target = e.target;
            this.prevSlide(this.sliders, this.currentSlide);

            
            this.prevSlide(this.dot.children, this.currentSlide, 'slick-active');
            if (target.matches('span, target, img')) {
                if (target.dataset.arrow === 'prev') {
                    this.currentSlide--;
                } else if (target.dataset.arrow === 'next') {
                    this.currentSlide++;
                }
            } else if (target.matches('button')) {
                [...this.dot.children].forEach((elem, index) => {
                    if (elem === target.parentElement) {
                        this.currentSlide = index;
                    }
                });
            }

            if (this.currentSlide >= this.sliders.length) {
                this.currentSlide = 0;
            }
            if (this.currentSlide < 0) {
                this.currentSlide = this.sliders.length - 1;
            }

            this.nextSlide(this.sliders, this.currentSlide);
            try {
                this.nextSlide(this.dot.children, this.currentSlide, 'slick-active');
            } catch (e) { }
        });
    }
   
}
