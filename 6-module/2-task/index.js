import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {

    this.name = product['name'];
    this.price = product['price'];
    this.category = product['category'];
    this.image = product['image'];
    this.id = product['id'];

    let cardElement = `
    <div class="card">
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
          </div>
    `;
    this.elem = createElement(cardElement);

    function addEvent (event) {
      let cardButton = event.target.closest('button');
      if (!cardButton) {return;}
      else {
        let newEvent = new CustomEvent("product-add", {detail: product.id, bubbles: true});
        cardButton.dispatchEvent(newEvent);
      }
    }
    this.elem.addEventListener('click', addEvent);

  }
}
