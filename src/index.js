"use strict";


import clubLists from './modules/clubListsDrop';
import modalWindow from './modules/modal';
import togglePopUp from './modules/togglePopUp';
import scrollWindow from './modules/scroll';
import gallery from './modules/gallery';

import services from './modules/servicesOurClubs';
import validator from './modules/validator';
import sendForms from './modules/sendForms';
import calculator from './modules/calculator';

import mainSlider from './modules/mainSlider';

modalWindow([
    {data: '[data-popup = "#free_visit_form"]', id: 'free_visit_form'},
    {data: '[data-popup = "#callback_form"]', id: 'callback_form'},
    {data: '.fixed-gift', id: 'gift'},
    {data: '#thanks', id: 'thanks'}
]
);

clubLists();

togglePopUp();
gallery(1500);

scrollWindow();

services();
validator();
sendForms();
calculator();
mainSlider();
