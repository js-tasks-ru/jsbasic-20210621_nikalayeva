import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {

    this.name = product['name'];
    this.price = product['price'];
    this.category = product['category'];
    this.image = product['image'];
    this.id = product['id'];

    this.elem = document.createElement('div');
    this.elem.classList.add("card");
    this.elem.innerHTML = `

          <div class="card__top">
              <img src='/assets/images/products/${this.image}' class="card__image" alt="product">
              <span class="card__price">€${this.price.toFixed(2)}</span>
          </div>
          <div class="card__body">
              <div class="card__title">${this.name}</div>
              <button type="button" class="card__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
          </div>

    `;

    let button = document.querySelector('.card__button');

    let event = new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
    });

    button.dispatchEvent(event);

  }

}
