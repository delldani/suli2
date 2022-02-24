export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const cardTypes = [
  "card-clubs-",
  "card-diamonds-",
  "card-hearts-",
  "card-spades-",
];
export const generateAllCardsArray = () => {
  let allCards = [];
  for (let index = 0; index < 4; index++) {
    for (let i = 1; i < 14; i++) {
      allCards.push(cardTypes[index] + i);
      allCards.push(cardTypes[index] + i);
    }
  }
  return allCards;
};

export const makeRandomCardsArray = (cardsNumber) => {
  const cards = generateAllCardsArray().slice(0, cardsNumber);
  const newCardsArray = [];
  let index;
  for (let i = cards.length - 1; i > -1; i--) {
    index = randomNumber(0, i);
    const element = cards.splice(index, 1);
    newCardsArray.push(element[0]);
  }
  return newCardsArray;
};

export const getBackSide = (fileName) => {
  if (
    fileName.split("-")[1] === "clubs" ||
    fileName.split("-")[1] === "spades"
  ) {
    return 1;
  } else {
    return 2;
  }
};
