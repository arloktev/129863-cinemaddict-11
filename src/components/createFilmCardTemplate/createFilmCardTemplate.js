const createFilmCardControlsMarkup = () => {
  return `
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
  `;
};

export const createFilmCardTemplate = (film) => {
  const {poster, name, rating, year, duration, genres, shortDescription, comments} = film;

  const filmCardControlsMarkup = createFilmCardControlsMarkup();

  return `
    <article class="film-card">
      <h3 class="film-card__title">${name}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genres.slice(0, 1)}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${shortDescription}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <form class="film-card__controls">
        ${filmCardControlsMarkup}
      </form>
    </article>
  `;
};
