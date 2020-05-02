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

export const generateComment = () => {
  return AUTHORS.map((it) => {
    return {
      emoji: getRandomArrayItem(EMOJI),
      text: getRandomArrayItem(COMMENTS),
      author: it,
      date: getRandomCommentDate(),
    };
  });
};
