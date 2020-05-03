import {movieTime, getRandomCommentDate, getRandomInteger, getRandomArrayItem, getRandomArray} from "../utils.js";

const TITLE = [`The Dance of Life`, `Sagebrush Trail`, `The Man with the Golden Arm`, `Santa Claus Conquers the Martians`, `Popeye the Sailor Meets Sindbad the Sailor`, `Reservoir Dogs`, `The Great Flamarion`, `Made for Each Other`, `The Seven Samurai`, `Bonnie and Clyde`];

const POSTER = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];

const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const GENRE = [
  `Action`,
  `Adventure`,
  `Comedy`,
  `Drama`,
  `Western`,
  `Horror`,
  `Thriller`,
  `Documental`,
  `Sci-fi`
];

const AGE_RATING = [
  `3`,
  `7`,
  `12`,
  `16`,
  `18`
];

const DIRECTORS = [
  `Roman Polanski`, `Tim Burton`, `Charles Chaplin`, `Sidney Lumet`, `James Cameron`, `John Ford`, `Joel Coen`, `Ingmar Bergman`, `David Lean`, `Clint Eastwood`, `Milos Forman`, `Peter Jackson`, `John Huston`, `Billy Wilder`, `Woody Allen`, `Francis Ford Coppola`, `Stanley Kubrick`, `Alfred Hitchcock`, `Martin Scorsese`, `Steven Spielberg`
];

const WRITERS = [
  `Billy Wilder`, `Robert Towne`, `Quentin Tarantino`, `William Goldman`, `Charlie Kaufman`, `Woody Allen`, `Nora Ephron`, `Ernest Lehman`, `Paul Schrader`, `Oliver Stone`, `Aaron Sorkin`, `Paddy Chayefsky`, `Spike Lee`, `George Lucas`, `Preston Sturges`, `Stanley Kubrick`, `Paul Thomas Anderson`, `Frances Marion`, `Buck Henry`, `Lawrence Kasdan`, `Joseph L. Mankiewicz`, `James L. Brooks`, `Akira Kurosawa`, `David Mamet`
];

const ACTORS = [
  `Tom Hanks`, `Leonardo DiCaprio`, `Robert Downey Jr.`, `Will Smith`, `Chris Hemsworth`, `Dwayne Johnson`, `Morgan Freeman`, `Johnny Depp`, `Tom Cruise`, `Chris Evans`, `Ryan Reynolds`, `Keanu Reeves`, `Chris Pratt`, `Samuel L. Jackson`, `Shahrukh Khan`, `Hugh Jackman`, `Benedict Cumberbatch`, `Jackie Chan`, `Brad Pitt`, `Tom Holland`, `Arnold Schwarzenegger`, `Sylvester Stallone`, `Robert De Niro`, `Christian Bale`, `Bradley Cooper`
];

const COUNTRY = [
  `China`, `India`, `United States`, `Indonesia`, `Russia`, `Sweden`, `United Kingdom`, `Germany`, `France`, `Romania`, `Kazakhstan`
];


const MAX_DESCRIPTION = 140;

const partOfArray = (array, sliceStart, sliceEnd) => getRandomArray(array).slice(0, getRandomInteger(sliceStart, sliceEnd));

const generateDescription = (text) => {
  const sentences = text.slice(0, -1).split(`. `);
  const descSentences = partOfArray(sentences, 1, 5);
  return `${descSentences.join(`. `)}.`;
};

const sliceLetters = (array) => {
  if (array.length > MAX_DESCRIPTION) {
    return array.slice(0, MAX_DESCRIPTION) + `...`;
  } else {
    return array;
  }
};

const generateFilmCards = () => {
  return TITLE.map((it) => {
    return {
      title: it,
      rating: getRandomInteger(0, 9) + `.` + getRandomInteger(0, 9),
      year: getRandomInteger(1950, 2019),
      duration: movieTime(Math.random() * 240),
      genre: getRandomArrayItem(GENRE),
      poster: getRandomArrayItem(POSTER),
      description: sliceLetters(generateDescription(DESCRIPTION)),
      comments: getRandomInteger(0, 5),
      altTitle: it,
      ageRating: getRandomArrayItem(AGE_RATING),
      director: getRandomArrayItem(DIRECTORS),
      writer: getRandomArrayItem(WRITERS) + `, ` + getRandomArrayItem(WRITERS) + `, ` + getRandomArrayItem(WRITERS),
      actor: getRandomArrayItem(ACTORS) + `, ` + getRandomArrayItem(ACTORS) + `, ` + getRandomArrayItem(ACTORS),
      date: getRandomCommentDate(),
      country: getRandomArrayItem(COUNTRY)
    };
  });
};

export {generateFilmCards};
