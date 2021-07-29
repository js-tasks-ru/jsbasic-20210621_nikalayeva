import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let totalContainer = `
    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left"  style="display: none;">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    </div>`;

    this.elem = createElement(totalContainer);
    let slideCollection = document.createElement('div');
    slideCollection.classList.add('carousel__inner');
    this.elem.append(slideCollection);

    let slideElement;

    for (let slide of slides) {

      this.name = slide.name;
      this.price = slide.price;
      this.image = slide.image;
      this.id = slide.id;

      slideElement = `
        <div class="carousel__slide" data-id="${this.id}">
        <img src="/assets/images/carousel/${this.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${this.price.toFixed(2)}</span>
          <div class="carousel__title">${this.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
        </div>
        `;
      slideCollection.insertAdjacentHTML('beforeend', slideElement);

    }


    function addEvent (event) {
      let cardButton = event.target.closest('button');
      if (!cardButton) {return;}
      else {
        let slideId = cardButton.parentElement.parentElement.dataset;
        let newEvent = new CustomEvent("product-add", {detail: slideId.id, bubbles: true});
        cardButton.dispatchEvent(newEvent);
      }
    }
    this.elem.addEventListener('click', addEvent);



    let slideNumber = 0;
    let shift;

    function changeSlide(event) {


      let slideNext = event.target.closest('.carousel__arrow_right');
      let slidePrevious = event.target.closest('.carousel__arrow_left');
      let buttonRight = document.querySelector('.carousel__arrow_right');
      let buttonLeft = document.querySelector('.carousel__arrow_left');
      let slides = document.querySelectorAll('.carousel__slide');

      if (slideNext) {
        ++slideNumber;
        slideCollection.style.transform = `translateX(${shift = (-slideCollection.offsetWidth * (slideNumber))}px)`;
        if (slideNumber == slides.length - 1) {
          buttonRight.style.display = 'none';
          buttonLeft.style.display = '';
        } else if ((slideNumber > 0) && (slideNumber < slides.length)) {
          buttonRight.style.display = '';
          buttonLeft.style.display = '';
        }

      } else if (slidePrevious) {
        slideCollection.style.transform = `translateX(${shift += slideCollection.offsetWidth}px)`;
        slideNumber--;
        if (slideNumber == 0) {
          buttonLeft.style.display = 'none';
          buttonRight.style.display = '';
        } else if ((slideNumber > 0) && (slideNumber < slides.length)) {
          buttonRight.style.display = '';
          buttonLeft.style.display = '';
        }

      } else {return;}
    }


    this.elem.addEventListener('click', changeSlide);



  }



}
