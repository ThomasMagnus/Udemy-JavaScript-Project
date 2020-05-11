'use strict'

let numberOfFilms;

function start() {

	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	
	while (isNaN(numberOfFilms) || numberOfFilms == '' || numberOfFilms == null) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const rememberMyFilms = () => {

	for (let i = 0; i < 2; i++) {
		let lastFilm = prompt('Один из последних просмотренных фильмов?');
		while (lastFilm == '' || lastFilm == null || !isNaN(lastFilm) || lastFilm.length > 50) {
			lastFilm = prompt('Один из последних просмотренных фильмов?');
		}
		const checkRegistr = lastFilm.toLowerCase();
		const strRegistr = checkRegistr[0].toUpperCase() + checkRegistr.slice(1, checkRegistr.length);
		let ratingThisFilm = +prompt('Как вы оцениваете данный фильм?');
		while (ratingThisFilm == '' || ratingThisFilm == null || isNaN(ratingThisFilm)) {
			ratingThisFilm = +prompt('Как вы оцениваете данный фильм?');
		}
		personalMovieDB.movies[strRegistr] = ratingThisFilm;
	}
}

rememberMyFilms();

const detectPersonalLevel = () => {

	if (numberOfFilms <= 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (numberOfFilms > 10 && numberOfFilms <= 30) {
		console.log('Вы классический зритель');
	} else if (numberOfFilms > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

const checkValue = (hidden) => {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

const writeYourGenres = () => {
	for (let i = 1; i <= 3; i++) {
		let yourFavoritGenres = prompt(`Ваш любимый жанр под номером ${i}`);
		while (yourFavoritGenres == '' || yourFavoritGenres == null || !isNaN(yourFavoritGenres) || yourFavoritGenres.length > 50) {
			yourFavoritGenres = prompt(`Ваш любимый жанр под номером ${i}`);
		}
		const checkRegistrGenres = yourFavoritGenres.toLowerCase();
		const strRegistrGenres = checkRegistrGenres[0].toUpperCase() + checkRegistrGenres.slice(1, checkRegistrGenres.length);
		personalMovieDB.genres[i - 1] = strRegistrGenres;
	}
}

writeYourGenres();

checkValue(personalMovieDB.privat);




