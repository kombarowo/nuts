import '../assets/_sprite.svg';
import '../styles/style.scss';
import scrollAnimate from "./modules/scrollAnimate";
import Slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', function () {
  scrollAnimate();

  new Slider('.slider', {
    slideClass: 'slider__slide',
    wrapperClass: 'slider__wrapper',
    prevBtnClass: 'preview__btn--prev',
    nextBtnClass: 'preview__btn--next',
    pagination: '.pagination',
    autoplay: 8
  });
});