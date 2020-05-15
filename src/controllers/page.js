import TopRatedContainer from '../components/createTopRatedContainerTemplate/createTopRatedContainerTemplate';
import MostCommentedContainer from '../components/createMostCommentedContainerTemplate/createMostCommentedContainerTemplate';
import Film from '../components/createFilmCardTemplate/createFilmCardTemplate';
import LoadMoreButton from '../components/createLoadMoreButtonTemplate/createLoadMoreButtonTemplate';
import FilmDetails from '../components/createFilmDetailsTemplate/createFilmDetailsTemplate';
import {RenderPosition, renderComponent, removeComponent} from '../utils/render';

const bodyElement = document.querySelector(`body`);

const COUNT_SHOWING_FILMS_ON_START = 5;
const COUNT_SHOWING_FILMS_ON_BUTTON = 5;

const renderFilm = (container, film) => {
  const showInfoFilmDetails = () => {
    bodyElement.classList.add(`hide-overflow`);
    bodyElement.append(filmDetailsComponent.getElement());
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

  filmComponent.titleClickHandler(showPopupFilmDetails);
  filmComponent.posterClickHandler(showPopupFilmDetails);
  filmComponent.commentsClickHandler(showPopupFilmDetails);
  filmDetailsComponent.closeClickHandler(hideInfoFilmDetails);

  renderComponent(container, filmComponent, RenderPosition.APPEND);
};

const renderFilms = (container, films) => {
  let showingFilmsCount = COUNT_SHOWING_FILMS_ON_START;

  films.slice(0, showingFilmsCount).forEach((film) => {
    renderFilm(container, film, RenderPosition.APPEND);
  });

  const loadMoreButtonComponent = new LoadMoreButton();

  renderComponent(container, loadMoreButtonComponent, RenderPosition.AFTER);

  loadMoreButtonComponent.buttonClickHandler(() => {
    const prevFilmsCount = showingFilmsCount;
    showingFilmsCount = showingFilmsCount + COUNT_SHOWING_FILMS_ON_BUTTON;

    films.slice(prevFilmsCount, showingFilmsCount).forEach((film) => {
      renderFilm(container, film, RenderPosition.APPEND);
    });

    if (showingFilmsCount >= films.length) {
      removeComponent(loadMoreButtonComponent);
    }
  });

  const filmsList = document.querySelector(`.films-list`);

  renderComponent(filmsList, new TopRatedContainer(), RenderPosition.AFTER);
  renderComponent(filmsList, new MostCommentedContainer(), RenderPosition.AFTER);

  const filmsListTopRatedContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);

  for (let i = 0; i < 2; i++) {
    renderFilm(filmsListTopRatedContainer[0], films[i], RenderPosition.APPEND);
    renderFilm(filmsListTopRatedContainer[1], films[i], RenderPosition.APPEND);
  }
};

export default class PageController {
  constructor(container) {
    this._container = container;
  }

  render(films) {
    renderFilms(this._container, films);
  }
}
