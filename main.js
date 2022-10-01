/* Шаг 1 */
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 0);
console.log(numberOfFilms);

/* Шаг 2 */

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

console.log(personalMovieDB);
