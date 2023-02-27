export class Render {
  constructor(renderer, container) {
    this._renderer = renderer;
    this._container = container;
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this._container.insertAdjacentHTML('afterbegin', item);
  }
}
