import AbstractComponent from "../abstract-component/abstract-component";

const createLoadMoreButtonTemplate = () => {
  return `
    <button class="films-list__show-more">Show more</button>
  `;
};

export default class LoadMoreButton extends AbstractComponent {
  getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  buttonClickHandler(cb) {
    this.getElement().addEventListener(`click`, cb);
  }
}
