/* Шаг 1 */
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 0);

/* Шаг 2 */
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

/* Шаг 3 */
const lastViewedFilmName = prompt(
    "Один из просмотренных фильмов",
    "Неизвестно"
  ),
  lastViewedFilmRate = prompt("На сколько оцените его?", "Неизвестно"),
  lastViewedFilmName2 = prompt("Один из просмотренных фильмов", "Неизвестно"),
  lastViewedFilmRate2 = prompt("На сколько оцените его?", "Неизвестно");

personalMovieDB.movies[lastViewedFilmName] = lastViewedFilmRate;
personalMovieDB.movies[lastViewedFilmName2] = lastViewedFilmRate2;

console.log(personalMovieDB);
