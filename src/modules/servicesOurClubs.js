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
    if (window.screen.width < 900) {
        clickSlider({
            main: '#services > .wrapper',
            wraper: '.services-slider',
            position: 0,
            slidesToShow: 2,
            infinity: false
        });
    }
    if (window.screen.width < 500) {
        clickSlider({
            main: '#services > .wrapper',
            wraper: '.services-slider',
            position: 0,
            slidesToShow: 1,
            infinity: false
        });
    }
    


    window.addEventListener('resize', () => {
       if(window.screen.width > 900) {
        clickSlider({
            main: '#services > .wrapper',
            wraper: '.services-slider',
            position: 0,
            slidesToShow: 3,
            infinity: false
        }); 
    }  else if (window.screen.width < 900 && window.screen.width > 500 ) {
            clickSlider({
                main: '#services > .wrapper',
                wraper: '.services-slider',
                position: 0,
                slidesToShow: 2,
                infinity: false
            });
    } else if (window.screen.width < 500) {
        clickSlider({
            main: '#services > .wrapper',
            wraper: '.services-slider',
            position: 0,
            slidesToShow: 1,
            infinity: false
        });
    }
    // clickSlider({
    //             main: '#services > .wrapper',
    //             wraper: '.services-slider',
    //             position: 0,
    //             slidesToShow: 3,
    //             infinity: false
    //         });

    // if(window.screen.width > 900) {
    //     clickSlider({
    //         main: '#services > .wrapper',
    //         wraper: '.services-slider',
    //         position: 0,
    //         slidesToShow: 3,
    //         infinity: false
    //     });
    // }else if (window.screen.width < 900) {
    //     clickSlider({
    //         main: '#services > .wrapper',
    //         wraper: '.services-slider',
    //         position: 0,
    //         slidesToShow: 2,
    //         infinity: false
    //     });
    // }
    });
};

export default ourServices;