import {createProfileTemplate} from './components/createProfileTemplate/createProfileTemplate';
import {createMenuTemplate} from './components/createMenuTemplate/createMenuTemplate';
import {createFilterTemplate} from './components/createFilterTemplate/createFilterTemplate';
import {createFilmsContainerTemplate} from './components/createFilmsContainerTemplate/createFilmsContainerTemplate';
import {createTopRatedContainerTemplate} from './components/createTopRatedContainerTemplate/createTopRatedContainerTemplate';
import {createMostCommentedContainerTemplate} from './components/createMostCommentedContainerTemplate/createMostCommentedContainerTemplate';
import {createFilmCardTemplate} from './components/createFilmCardTemplate/createFilmCardTemplate';
import {createLoadMoreButtonTemplate} from './components/createLoadMoreButtonTemplate/createLoadMoreButtonTemplate';
import {createFilmDetailsTemplate} from './components/createFilmDetailsTemplate/createFilmDetailsTemplate';
import {generateFilm} from './mock/film';
import {generateMenus} from './mock/menu';

const sortNames = [`Sort by default`, `Sort by date`, `Sort by rating`];

const renderElement = (container, template, position) => {
  return container.insertAdjacentHTML(position, template);
};

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

renderElement(headerElement, createProfileTemplate(), `beforeend`);
renderElement(mainElement, createMenuTemplate(generateMenus()), `beforeend`);
renderElement(mainElement, createFilterTemplate(sortNames), `beforeend`);
renderElement(mainElement, createFilmsContainerTemplate(), `beforeend`);

const filmsListContainer = document.querySelector(`.films-list__container`);

const films = [];
const COUNT_FILMS = 20;

for (let i = 0; i < COUNT_FILMS; i++) {
  films.push(generateFilm());
}

for (let i = 0; i < 5; i++) {
  renderElement(filmsListContainer, createFilmCardTemplate(films[i]), `beforeend`);
}

renderElement(filmsListContainer, createLoadMoreButtonTemplate(), `afterend`);

const filmsList = document.querySelector(`.films-list`);

renderElement(filmsList, createTopRatedContainerTemplate(), `afterend`);
renderElement(filmsList, createMostCommentedContainerTemplate(), `afterend`);

const filmsListTopRatedContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);

for (let i = 0; i < 2; i++) {
  renderElement(filmsListTopRatedContainer[0], createFilmCardTemplate(films[i]), `beforeend`);
  renderElement(filmsListTopRatedContainer[1], createFilmCardTemplate(films[i]), `beforeend`);
}

// renderElement(mainElement, createFilmDetailsTemplate(films[1]), `beforeend`);

