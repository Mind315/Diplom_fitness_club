"use strict";

import Sliders from './sliders';

const gallery = (time) => {

  const gallery = new Sliders('.gallery-slider', '.slide', 'slider-dots');
  gallery.startSlide(time);
  gallery.clickAutoSlider();
  
  gallery.dots('slider-dots');
  gallery.hideFotos();
  
  gallery.addArrow('prev', './images/arrow-left.png');
  gallery.addArrow('next', './images/arrow-right.png');
  gallery.mouseEvent();
  
};

export default gallery;