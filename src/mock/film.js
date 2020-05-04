const getRandomInRange = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
const getRandomInArray = (array) => array[getRandomInRange(0, array.length - 1)];

const NAME_FILMS = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `The Man with the Golden Arm`,
  `The Great Flamarion`,
  `Made for Each Other`,
];

const NAME_FILES_POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const GENRE_FILMS = [
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Mystery`,
];

const DESCRIPTION_FILM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const TEXT_COMMENTS = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`
];

const EMOTIONS_COMMENTS = [
  `angry`,
  `puke`,
  `sleeping`,
  `smile`,
];

const generateComment = () => {
  return {
    text: getRandomInArray(TEXT_COMMENTS),
    emotion: getRandomInArray(EMOTIONS_COMMENTS),
    author: `John Doe`,
    date: `2019/12/31 23:59`,
  };
};

const generateComments = (count) => {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(generateComment());
  }

  return result;
};

export const generateFilm = () => {
  const imageFilm = getRandomInArray(NAME_FILES_POSTERS);
  const nameFilm = getRandomInArray(NAME_FILMS);

  return {
    poster: imageFilm,
    image: imageFilm,
    name: nameFilm,
    originalName: nameFilm,
    rating: getRandomInRange(0, 10),
    year: getRandomInRange(1900, 2020),
    duration: `1h 36m`,
    genres: GENRE_FILMS.slice(0, getRandomInRange(0, GENRE_FILMS.length - 1)),
    shortDescription: DESCRIPTION_FILM.slice(0, getRandomInRange(0, DESCRIPTION_FILM.length - 1)),
    description: DESCRIPTION_FILM.slice(0, getRandomInRange(0, DESCRIPTION_FILM.length - 1)),
    comments: generateComments(5).slice(0, getRandomInRange(0, 5)),
    ageRating: `18+`,
    director: `Anthony Mann`,
    writers: `Anne Wigton, Heinz Herald, Richard Weil`,
    actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
    releaseDate: `30 March 1945`,
    runtime: `1h 18m`,
    country: `USA`,
  };
};
