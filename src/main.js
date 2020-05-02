import {createFilmCardTemplate} from './components/film-card';
import {createCardContainerTemplate} from './components/films-list';
import {createFooterStatisticsTemplate} from './components/footer-statistics';
import {createFullFilmDetailsTemplate} from './components/full-film-details';
import {createMenuTemplate} from './components/menu';
import {createProfileNameTemplate} from './components/profile';
import {createShowMoreButtonTemplate} from './components/show-more-button';
import {createSortTemplate} from './components/sort';
import {createTopFilmCardContainerTemplate} from './components/top-films-list';
import {createCommentElement} from './components/comment';
import {generateMenu} from './mock/menu.js';
import {generateFilmCards} from './mock/filmcards.js';
import {generateComment} from './mock/comments.js';
import {getRandomInteger} from './utils.js';


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const SHOWING_MOVIE_COUNT_ON_START = 5;
const SHOWING_MOVIE_COUNT_BY_BUTTON = 5;

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createProfileNameTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);

const menus = generateMenu();
render(siteMainElement, createMenuTemplate(menus), `beforeend`);

render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createCardContainerTemplate(), `beforeend`);
const siteCardCointainerElement = document.querySelector(`.films-list__container`);

const movies = generateFilmCards();

let showingTasksCount = SHOWING_MOVIE_COUNT_ON_START;

movies.slice(0, showingTasksCount)
  .forEach((element) => render(siteCardCointainerElement, createFilmCardTemplate(element), `beforeend`));

const siteFilmsElement = document.querySelector(`.films`);
const siteFilmsListElement = siteFilmsElement.querySelector(`.films-list`);
render(siteFilmsListElement, createShowMoreButtonTemplate(), `beforeend`);

const loadMoreButton = siteFilmsListElement.querySelector(`.films-list__show-more`);

loadMoreButton.addEventListener(`click`, () => {
  movies.slice(showingTasksCount, movies.length)
  .forEach((element) => render(siteCardCointainerElement, createFilmCardTemplate(element), `beforeend`));
  showingTasksCount = showingTasksCount + SHOWING_MOVIE_COUNT_BY_BUTTON;
  if (showingTasksCount >= movies.length) {
    loadMoreButton.remove();
  }
});

render(siteFilmsElement, createTopFilmCardContainerTemplate(`Top rated`), `beforeend`);
render(siteFilmsElement, createTopFilmCardContainerTemplate(`Most commented`), `beforeend`);

const siteTopCardElement = document.querySelectorAll(`.films-list--extra`);
const siteTopCardListElement = siteTopCardElement[0].querySelector(`.films-list__container`);

for (let i = 0; i < 2; i++) {
  render(siteTopCardListElement, createFilmCardTemplate(movies[getRandomInteger(0, movies.length - 1)]), `beforeend`);
}

const siteTopCardListElementTwo = siteTopCardElement[1].querySelector(`.films-list__container`);

for (let i = 0; i < 2; i++) {
  render(siteTopCardListElementTwo, createFilmCardTemplate(movies[getRandomInteger(0, movies.length - 1)]), `beforeend`);
}

const siteFooterElement = document.querySelector(`.footer`);
const siteFooterStatisticsElement = siteFooterElement.querySelector(`.footer__statistics`);
render(siteFooterStatisticsElement, createFooterStatisticsTemplate(getRandomInteger(0, 155)), `beforeend`);

const siteBodyElement = document.querySelector(`body`);

render(siteBodyElement, createFullFilmDetailsTemplate(movies[0]), `beforeEnd`);

const filmDetails = document.querySelector(`.film-details`);
const commentsElement = document.querySelector(`.film-details__comments-list`);

const comments = generateComment();

comments.forEach((element) => render(commentsElement, createCommentElement(element), `beforeend`));

if (filmDetails) {
  filmDetails.style = `display:  none`;
}
