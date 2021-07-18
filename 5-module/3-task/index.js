function initCarousel() {

  let container = document.querySelector('.carousel__inner');
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let slides = document.querySelectorAll('.carousel__slide');
  let slideNumber = 0;
  buttonLeft.style.display = 'none';
  let shift;

  buttonRight.onclick = function () {
    slideNumber += 1;
    container.style.transform = `translateX(${shift = (-988 * (slideNumber))}px)`;
    if (slideNumber == slides.length - 1 ) {
      buttonRight.style.display = 'none';
      buttonLeft.style.display = '';
    } else if ((slideNumber > 0) && (slideNumber < slides.length)) {
      buttonRight.style.display = '';
      buttonLeft.style.display = '';
    }
  };

  buttonLeft.onclick = function () {
    container.style.transform = `translateX(${shift += 988}px)`;
    slideNumber -= 1;
    if (slideNumber == 0) {
      buttonLeft.style.display = 'none';
      buttonRight.style.display = '';
    } else if ((slideNumber > 0) && (slideNumber < slides.length)) {
      buttonRight.style.display = '';
      buttonLeft.style.display = '';
    }
  };
}
