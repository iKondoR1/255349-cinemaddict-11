import HeaderProfileComponent from './components/header-profile';
import MenuComponent from './components/menu';
import SortComponent from './components/sort';
import CardContainerComponent from './components/films-list';
import FilmCardComponent from './components/film-card';
import ShowMoreButtonComponent from './components/show-more-button';
import TopFilmCardContainerComponent from './components/top-films-list';
import FooterStatisticsComponent from './components/footer-statistics';
import FullFilmDetailsComponent from './components/full-film-details';
import CommentComponent from './components/comment';
import {generateMenu} from './mock/menu';
import {generateFilmCards} from './mock/filmcards';
import {generateComment} from './mock/comments';
import {getRandomInteger, render, RenderPosition, sortObjectsByKey} from './utils';

const SHOWING_MOVIE_COUNT_ON_START = 5;
const SHOWING_MOVIE_COUNT_BY_BUTTON = 5;

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

const renderFilm = (container, film, position) => {
  const showPopUpElements = [`.film-card__poster`, `.film-card__title`, `.film-card__comments`];

  const renderPopUp = () => {
    document.body.appendChild(popup.getElement());
    document.addEventListener(`keydown`, onEscKeyDown);
    popup.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, onPopUpCloseBtnClick);
  };

  const removePopUp = () => {
    popup.getElement().querySelector(`.film-details__close-btn`).removeEventListener(`click`, onPopUpCloseBtnClick);
    document.body.removeChild(popup.getElement());
    popup.removeElement();
    document.removeEventListener(`keydown`, onEscKeyDown);
  };

  const onPopUpCloseBtnClick = () => {
    removePopUp();
  };

  const onEscKeyDown = (evt) => {
    if (evt.keyCode === 27) {
      removePopUp();
    }
  };
  const filmComponent = new FilmCardComponent(film);
  render(container, filmComponent.getElement(), position);
	
	const popup = new FullFilmDetailsComponent(film);

  showPopUpElements.forEach((element) => {
    filmComponent.getElement()
      .querySelector(element)
      .addEventListener(`click`, renderPopUp);
  });
};
const renderBigList = (list, films) => {
  const filmsContainer = list.getElement().querySelector(`.films-list__container`);

  let showingFilmsCount = SHOWING_MOVIE_COUNT_ON_START;

  films.slice(0, showingFilmsCount)
    .forEach((film) => renderFilm(filmsContainer, film, RenderPosition.BEFOREEND));

  const showMoreBtnComponent = new ShowMoreButtonComponent();
  render(list.getElement(), showMoreBtnComponent.getElement(), RenderPosition.BEFOREEND);

  showMoreBtnComponent.getElement().addEventListener(`click`, () => {
    const prevFilmCount = showingFilmsCount;
    showingFilmsCount = showingFilmsCount + SHOWING_MOVIE_COUNT_BY_BUTTON;

    films.slice(prevFilmCount, showingFilmsCount)
      .forEach((film) => renderFilm(filmsContainer, film, RenderPosition.BEFOREEND));

    if (showingFilmsCount >= films.length) {
      showMoreBtnComponent.getElement().remove();
      showMoreBtnComponent.removeElement();
    }
  });
};


const siteHeaderProfile = new HeaderProfileComponent();
render(siteHeaderElement, siteHeaderProfile.getElement(), RenderPosition.BEFOREEND);

const mainMenu = generateMenu();
const siteMainMenu = new MenuComponent(mainMenu);
render(siteMainElement, siteMainMenu.getElement(), RenderPosition.BEFOREEND);

const siteMainFilters = new SortComponent();
render(siteMainElement, siteMainFilters.getElement(), RenderPosition.BEFOREEND);

const siteCardContainer = new CardContainerComponent();
render(siteMainElement, siteCardContainer.getElement(), RenderPosition.BEFOREEND);

const movies = generateFilmCards();
renderBigList(siteCardContainer, movies);

const topRatedList = sortObjectsByKey(movies, `rating`);
const siteTopFilm = new TopFilmCardContainerComponent(`Top rated`);
render(siteCardContainer.getElement(), siteTopFilm.getElement(), RenderPosition.BEFOREEND);
const topRatedContainer = siteTopFilm.getElement().querySelector(`.films-list__container`);
topRatedList.slice(0, 2)
  .forEach((film) => renderFilm(topRatedContainer, film, RenderPosition.BEFOREEND));

const mostCommentedList = sortObjectsByKey(movies, `comments`);
const siteMostCommented = new TopFilmCardContainerComponent(`Most commented`);
render(siteCardContainer.getElement(), siteMostCommented.getElement(), RenderPosition.BEFOREEND);
const commentedContainer = siteMostCommented.getElement().querySelector(`.films-list__container`);
mostCommentedList.slice(0, 2)
  .forEach((film) => renderFilm(commentedContainer, film, RenderPosition.BEFOREEND));

const footerStatistics = new FooterStatisticsComponent(movies.length);
render(siteFooterElement, footerStatistics.getElement(), RenderPosition.BEFOREEND);

