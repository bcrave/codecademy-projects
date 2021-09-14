const getRandomElement = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");
  return arr[Math.floor(Math.random() * arr.length)];
};

const findQuoteIndex = (arr) => {
  return arr.indexOf((item) => {
    item.person || item.quote;
  });
};

module.exports = {
  getRandomElement,
  findQuoteIndex,
};
