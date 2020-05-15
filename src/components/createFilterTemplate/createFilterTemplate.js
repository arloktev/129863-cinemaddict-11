import AbstractComponent from "../abstract-component/abstract-component";

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

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
