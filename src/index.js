"use strict";

//npm run dev

import toggleMenu from './modules/toggleMenu';
import clubLists from './modules/clubListsDrop';
import modalWindow from './modules/modal';
import togglePopUp from './modules/togglePopUp';
import scrollWindow from './modules/scroll';
import photoGallery from './modules/рhotoGallery';

import services from './modules/servicesOurClubs';
import validator from './modules/validator';
import sendForms from './modules/sendForms';
import calculator from './modules/calculator';

import mainSlider from './modules/mainSlider';


toggleMenu();
clubLists();
modalWindow([
    {data: '[data-popup = "#free_visit_form"]', id: 'free_visit_form'},
    {data: '[data-popup = "#callback_form"]', id: 'callback_form'},
    {data: '.fixed-gift', id: 'gift'},
    {data: '#thanks', id: 'thanks'}
]
);
togglePopUp();
photoGallery(1500);


services();
validator();
sendForms();
calculator();
mainSlider();
