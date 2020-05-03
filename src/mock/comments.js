import {getRandomCommentDate, getRandomArrayItem} from '../utils.js';

const EMOJI = [
  `angry.png`,
  `puke.png`,
  `sleeping.png`,
  `smile.png`,
];

const COMMENTS = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`,
];

const AUTHORS = [
  `Tim Macoveev`,
  `John Doe`,
  `Max Smith`,
  `Jane Sun`,
];

const generateComment = () => ({
      emoji: getRandomArrayItem(EMOJI),
      text: getRandomArrayItem(COMMENTS),
      author: getRandomArrayItem(AUTHORS),
      date: getRandomCommentDate(),
  });


export const generateComments = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateComment);
};
