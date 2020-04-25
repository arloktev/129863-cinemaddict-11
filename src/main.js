import {createProfileMarkup} from './components/createProfileMarkup/createProfileMarkup';
import {createMenuMarkup} from './components/createMenuMarkup/createMenuMarkup';
import {createFilterMarkup} from './components/createFilterMarkup/createFilterMarkup';
import {createFilmsContainerMarkup} from './components/createFilmsContainerMarkup/createFilmsContainerMarkup';
import {createTopRatedContainerMarkup} from './components/createTopRatedContainerMarkup/createTopRatedContainerMarkup';
import {createMostCommentedContainerMarkup} from './components/createMostCommentedContainerMarkup/createMostCommentedContainerMarkup';
import {createFilmCardMarkup} from './components/createFilmCardMarkup/createFilmCardMarkup';
import {createLoadMoreButtonMarkup} from './components/createLoadMoreButtonMarkup/createLoadMoreButtonMarkup';
import {createFilmDetailsMarkup} from './components/createFilmDetailsMarkup/createFilmDetailsMarkup';

const renderElement = (container, markup, position) => {
  return container.insertAdjacentHTML(position, markup);
};

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

renderElement(header, createProfileMarkup(), `beforeend`);
renderElement(main, createMenuMarkup(), `beforeend`);
renderElement(main, createFilterMarkup(), `beforeend`);
renderElement(main, createFilmsContainerMarkup(), `beforeend`);

const filmsListContainer = document.querySelector(`.films-list__container`);

for (let i = 0; i < 5; i++) {
  renderElement(filmsListContainer, createFilmCardMarkup(), `beforeend`);
}

renderElement(filmsListContainer, createLoadMoreButtonMarkup(), `afterend`);

const filmsList = document.querySelector(`.films-list`);

renderElement(filmsList, createTopRatedContainerMarkup(), `afterend`);
renderElement(filmsList, createMostCommentedContainerMarkup(), `afterend`);

const filmsListTopRatedContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);

for (let i = 0; i < 2; i++) {
  renderElement(filmsListTopRatedContainer[0], createFilmCardMarkup(), `beforeend`);
  renderElement(filmsListTopRatedContainer[1], createFilmCardMarkup(), `beforeend`);
}

// renderElement(main, createFilmDetailsMarkup(), `beforeend`);

