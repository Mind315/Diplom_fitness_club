"use strict";

import clickSlider from './clickSlider';

const ourServices = () => {
    clickSlider({
        main: '#services > .wrapper',
        wraper: '.services-slider',
        position: 0,
        slidesToShow: 3,
        infinity: false
    });
 
};

export default ourServices;