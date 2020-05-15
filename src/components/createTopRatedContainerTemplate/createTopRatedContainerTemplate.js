import AbstractComponent from "../abstract-component/abstract-component";

const createTopRatedContainerTemplate = () => {
  return `
    <section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>

      <div class="films-list__container"></div>
    </section>
  `;
};

export default class TopRatedContainer extends AbstractComponent {
  getTemplate() {
    return createTopRatedContainerTemplate();
  }
}
