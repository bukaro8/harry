export const toUpperCase = (str) => {
  let separatedWord = str.split(' ');
  let capitalLetter = separatedWord.map(
    (el) => el[0].toUpperCase() + el.slice(1)
  );
  return capitalLetter.join(' ');
};
