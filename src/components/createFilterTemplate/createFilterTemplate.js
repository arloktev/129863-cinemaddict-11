const createFilterMarkup = (name, isActive) => {
  return `<li><a href="#" class="sort__button ${isActive ? `sort__button--active` : ``}">${name}</a></li>`;
};

export const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((name, index) => createFilterMarkup(name, index === 0)).join(`\n`);

  return `
    <ul class="sort">
      ${filtersMarkup}
    </ul>
  `;
};
