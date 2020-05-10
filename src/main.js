import Profile from './components/createProfileTemplate/createProfileTemplate';
import Menu from './components/createMenuTemplate/createMenuTemplate';
import Filter from './components/createFilterTemplate/createFilterTemplate';
import FilmsContainer from './components/createFilmsContainerTemplate/createFilmsContainerTemplate';
import TopRatedContainer from './components/createTopRatedContainerTemplate/createTopRatedContainerTemplate';
import MostCommentedContainer from './components/createMostCommentedContainerTemplate/createMostCommentedContainerTemplate';
import Film from './components/createFilmCardTemplate/createFilmCardTemplate';
import LoadMoreButton from './components/createLoadMoreButtonTemplate/createLoadMoreButtonTemplate';
import FilmDetails from './components/createFilmDetailsTemplate/createFilmDetailsTemplate';
import {generateFilm} from './mock/film';
import {generateMenus} from './mock/menu';
import {RenderPosition, renderElement} from './utils/render';

const sortNames = [`Sort by default`, `Sort by date`, `Sort by rating`];

const bodyElement = document.querySelector(`body`);
const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

renderElement(headerElement, new Profile().getElement(), RenderPosition.APPEND);
renderElement(mainElement, new Menu(generateMenus()).getElement(), RenderPosition.APPEND);
renderElement(mainElement, new Filter(sortNames).getElement(), RenderPosition.APPEND);
renderElement(mainElement, new FilmsContainer().getElement(), RenderPosition.APPEND);

const filmsListContainer = document.querySelector(`.films-list__container`);

const films = [];
const COUNT_FILMS = 20;
const COUNT_SHOWING_FILMS_ON_START = 5;
const COUNT_SHOWING_FILMS_ON_BUTTON = 5;

for (let i = 0; i < COUNT_FILMS; i++) {
  films.push(generateFilm());
}

const renderFilm = (container, film) => {
  const showInfoFilmDetails = () => {
    bodyElement.classList.add(`hide-overflow`);
    bodyElement.appendChild(filmDetailsComponent.getElement());
  };

  const hideInfoFilmDetails = () => {
    bodyElement.classList.remove(`hide-overflow`);
    bodyElement.removeChild(filmDetailsComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      hideInfoFilmDetails();

      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const showPopupFilmDetails = () => {
    showInfoFilmDetails();
    document.addEventListener(`keydown`, onEscKeyDown);
  };

  const filmComponent = new Film(film);
  const filmDetailsComponent = new FilmDetails(film);

  const filmCardTitle = filmComponent.getElement().querySelector(`.film-card__title`);
  const filmCardPoster = filmComponent.getElement().querySelector(`.film-card__poster`);
  const filmCardComments = filmComponent.getElement().querySelector(`.film-card__comments`);
  const filmDetailsClose = filmDetailsComponent.getElement().querySelector(`.film-details__close-btn`);

  filmCardTitle.addEventListener(`click`, showPopupFilmDetails);
  filmCardPoster.addEventListener(`click`, showPopupFilmDetails);
  filmCardComments.addEventListener(`click`, showPopupFilmDetails);
  filmDetailsClose.addEventListener(`click`, hideInfoFilmDetails);

  renderElement(container, filmComponent.getElement(), RenderPosition.APPEND);
};

let showingFilmsCount = COUNT_SHOWING_FILMS_ON_START;

films.slice(0, showingFilmsCount).forEach((film) => {
  renderFilm(filmsListContainer, film, RenderPosition.APPEND);
});

const loadMoreButtonComponent = new LoadMoreButton();

renderElement(filmsListContainer, loadMoreButtonComponent.getElement(), RenderPosition.AFTER);

loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
  const prevFilmsCount = showingFilmsCount;
  showingFilmsCount = showingFilmsCount + COUNT_SHOWING_FILMS_ON_BUTTON;

  films.slice(prevFilmsCount, showingFilmsCount).forEach((film) => {
    renderFilm(filmsListContainer, film, RenderPosition.APPEND);
  });

  if (showingFilmsCount >= films.length) {
    loadMoreButtonComponent.getElement().remove();
  }
});

const filmsList = document.querySelector(`.films-list`);

renderElement(filmsList, new TopRatedContainer().getElement(), RenderPosition.AFTER);
renderElement(filmsList, new MostCommentedContainer().getElement(), RenderPosition.AFTER);

const filmsListTopRatedContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);

for (let i = 0; i < 2; i++) {
  renderFilm(filmsListTopRatedContainer[0], films[i], RenderPosition.APPEND);
  renderFilm(filmsListTopRatedContainer[1], films[i], RenderPosition.APPEND);
}

