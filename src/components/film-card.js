export const createFilmCardTemplate = (name) => {
  const {cardTitle, cardRating, cardYear, cardDuration, cardGenre, cardPoster, cardDescription, cardComments} = name;

  return (`<article class="film-card">
<h3 class="film-card__title">${cardTitle}</h3>
          <p class="film-card__rating">${cardRating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${cardYear}</span>
            <span class="film-card__duration">${cardDuration}</span>
            <span class="film-card__genre">${cardGenre}</span>
          </p>
          <img src="./images/posters/${cardPoster}" alt="" class="film-card__poster">
          <p class="film-card__description">${cardDescription}</p>
          <a class="film-card__comments">${cardComments} comments</a>
            <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`);
};
