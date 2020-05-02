const MONTH_NAMES = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

const movieTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time - hours * 60);
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
};

const getRandomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const getRandomCommentDate = () => {
  const date = new Date();
  const year = getRandomInteger(2018, 2020);
  const month = getRandomInteger(0, 12);
  const day = getRandomInteger(0, 28);
  date.setFullYear(year, month, day);
  return date;
};

const getRandomArrayItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const castDateFormat = (value) => value < 10 ? `0${value}` : String(value);

const formatDate = (date, format = false) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = castDateFormat(date.getDate());
  const hour = castDateFormat(getRandomInteger(0, 23));
  const minute = castDateFormat(getRandomInteger(0, 59));
  if (format === `comment`) {
    return `${year}/${castDateFormat(month + 1)}/${day} ${hour}:${minute}`;
  }

  return format ? `${day} ${MONTH_NAMES[month]} ${year}` : `${year}`;
};

const getRandomArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export {movieTime, getRandomInteger, getRandomCommentDate, getRandomArrayItem, getRandomDate, formatDate, getRandomArray};
