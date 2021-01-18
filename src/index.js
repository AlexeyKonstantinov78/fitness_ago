'use strict';

import clubSelection from "./modules/clubSelection";
import modalWindow from "./modules/modalWindow";
import scrollWindow from "./modules/scrollWindow";
import slider from "./modules/slider";
import photoGallery from "./modules/photoGallery";
import carousel from "./modules/carousel";
import calc from "./modules/calc";
import popupMenu from "./modules/popupMenu";
import sendForm from "./modules/sendForm";

//выпадающее меню выбор клуба
clubSelection();

//модальные окна
modalWindow();

//стрелка scroll появление кнопки 
scrollWindow();

//Главный слайдер
slider();

// Фотогалерея
photoGallery();

// карусель 
carousel();

// калькулятор 
calc();

// бургер меню
popupMenu();

// отправка форм
sendForm();
