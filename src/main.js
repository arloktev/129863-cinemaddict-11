import Profile from './components/createProfileTemplate/createProfileTemplate';
import Menu from './components/createMenuTemplate/createMenuTemplate';
import Filter from './components/createFilterTemplate/createFilterTemplate';
import NoFilms from './components/no-films/no-films';
import {generateFilm} from './mock/film';
import {generateMenus} from './mock/menu';
import {RenderPosition, renderComponent} from './utils/render';
import PageController from './controllers/page';
import FilmsContainer from './components/createFilmsContainerTemplate/createFilmsContainerTemplate';

const sortNames = [`Sort by default`, `Sort by date`, `Sort by rating`];

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

renderComponent(headerElement, new Profile(), RenderPosition.APPEND);
renderComponent(mainElement, new Menu(generateMenus()), RenderPosition.APPEND);
renderComponent(mainElement, new Filter(sortNames), RenderPosition.APPEND);

renderComponent(mainElement, new FilmsContainer(), RenderPosition.APPEND);

const filmsListContainer = document.querySelector(`.films-list__container`);

const films = [];
const COUNT_FILMS = 20;

for (let i = 0; i < COUNT_FILMS; i++) {
  films.push(generateFilm());
}

if (films.length) {
  new PageController(filmsListContainer).render(films);
} else {
  renderComponent(mainElement, new NoFilms(), RenderPosition.APPEND);
}

