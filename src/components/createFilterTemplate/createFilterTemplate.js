import {createElement} from "../../utils/render";

const createFilterMarkup = (name, isActive) => {
  return `<li><a href="#" class="sort__button ${isActive ? `sort__button--active` : ``}">${name}</a></li>`;
};

const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((name, index) => createFilterMarkup(name, index === 0)).join(`\n`);

  return `
    <ul class="sort">
      ${filtersMarkup}
    </ul>
  `;
};

export default class Filter {
  constructor(filters) {
    this._filters = filters;

    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
