import AbstractComponent from "../abstract-component/abstract-component";

const createMostCommentedContainerTemplate = () => {
  return `
    <section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>

      <div class="films-list__container"></div>
    </section>
  `;
};

export default class MostCommentedContainer extends AbstractComponent {
  getTemplate() {
    return createMostCommentedContainerTemplate();
  }
}
