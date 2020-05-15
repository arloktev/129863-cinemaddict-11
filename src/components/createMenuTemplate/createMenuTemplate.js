import AbstractComponent from "../abstract-component/abstract-component";

const createMenuMarkup = (menu, isActive) => {
  const {name, link, count} = menu;

  return (
    `
      <a
        href="#${link}"
        class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}"
      >${name}
        ${link !== `all` ? `<span class="main-navigation__item-count">${count}</span>` : ``}
      </a>`
  );
};

const createMenuTemplate = (menus) => {
  const menusMarkup = menus.map((menu, index) => createMenuMarkup(menu, index === 0)).join(`\n`);

  return `
    <nav class="main-navigation">
      <div class="main-navigation__items">
        ${menusMarkup}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>
  `;
};

export default class Menu extends AbstractComponent {
  constructor(menus) {
    super();

    this._menus = menus;
  }

  getTemplate() {
    return createMenuTemplate(this._menus);
  }
}
