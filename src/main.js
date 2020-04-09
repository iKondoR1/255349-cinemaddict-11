import {createFilmCardTemplate} from './components/film-card';
import {createCardContainerTemplate} from './components/films-list';
import {createFooterStatisticsTemplate} from './components/footer-statistics';
import {createFullFilmDetailsTemplate} from './components/full-film-details';
import {createMenuTemplate} from './components/menu';
import {createProfileNameTemplate} from './components/profile';
import {createShowMoreButtonTemplate} from './components/show-more-button';
import {createSortTemplate} from './components/sort';
import {createTopFilmCardContainerTemplate} from './components/top-films-list';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createProfileNameTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createMenuTemplate(), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createCardContainerTemplate(), `beforeend`);
const siteCardCointainerElement = document.querySelector(`.films-list__container`);

for (let i = 0; i < 5; i++) {
  render(siteCardCointainerElement, createFilmCardTemplate(), `beforeend`);
}

const siteFilmsElement = document.querySelector(`.films`);
render(siteFilmsElement, createShowMoreButtonTemplate(), `beforeend`);
render(siteFilmsElement, createTopFilmCardContainerTemplate(), `beforeend`);
render(siteFilmsElement, createTopFilmCardContainerTemplate(), `beforeend`);

const siteTopCardElement = document.querySelectorAll(`.films-list--extra`);
const siteTopCardListElement = siteTopCardElement[0].querySelector(`.films-list__container`);

for (let i = 0; i < 2; i++) {
  render(siteTopCardListElement, createFilmCardTemplate(), `beforeend`);
}

const siteTopCardListElementTwo = siteTopCardElement[1].querySelector(`.films-list__container`);

for (let i = 0; i < 2; i++) {
  render(siteTopCardListElementTwo, createFilmCardTemplate(), `beforeend`);
}

const siteFooterElement = document.querySelector(`.footer`);
const siteFooterStatisticsElement = siteFooterElement.querySelector(`.footer__statistics`);
render(siteFooterStatisticsElement, createFooterStatisticsTemplate(), `beforeend`);

const siteBodyElement = document.querySelector(`body`);
render(siteBodyElement, createFullFilmDetailsTemplate(), `beforeEnd`);

	const filmDetails = document.querySelector(`.film-details`);

if (filmDetails) {
  filmDetails.style = `display: none`;
}
