"use strict";

const scrollWindow = () => {

         const topMenu = document.querySelector('.top-menu'),
         headerMain = document.querySelector('.header-main'),
         top = document.getElementById('totop');

         document.getElementById('totop').style.display = 'none';
      
   window.addEventListener('scroll', function (event) {

      if (topMenu.offsetTop < window.scrollY && window.screen.width < 768) {
         topMenu.classList.add('sticky');
      } else {
         topMenu.classList.remove('sticky');
      }
      
      const height = document.documentElement.scrollTop;
      const header = document.querySelector('.header-main').offsetHeight;

      if (height < header){
         top.style.display = 'none';
      } else {
         top.style.display = 'block';
      }

      
   });
};


export default scrollWindow;
