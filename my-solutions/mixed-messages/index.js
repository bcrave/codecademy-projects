// Quotes from members of punk bands.  Try to guess which ones are accurate!

const quotesObjects = [];
const bands = [
  "Strike Anywhere",
  "Hot Water Music",
  "The Flatliners",
  "The Menzingers",
  "The Felix Culpa",
  "Frail Body",
  "RVIVR",
  "Dear Boys",
  "Pop Warner",
  "Pet Symmetry",
];
const people = [
  "Thomas Barnett",
  "Chuck Ragan",
  "Chris Crewsswell",
  "Tom May",
  "Marky Hladish",
  "Lowell Shaffer",
  "Erica Freas",
  "Kyle Bebee",
  "Dylan Astle",
  "Evan Weiss",
];
const quotes = [
  "National borders are a crime against all of us!",
  "I love fishin', man",
  "Have you heard my podcast? I have a podcast.",
  "I really hope our music can help people feel good about themselves and make other people in their lives feel good.",
  "Find YOUR voice, man.",
  "Yo can you teach me Russian?",
  "I live in Bristol now!",
  "Dear BOOOOOSH",
  "Up the punx (hang loose sign)",
  "No, you can't come over.",
];

const generateQuote = () => {
  const band = bands[Math.floor(Math.random() * bands.length)];
  const person = people[Math.floor(Math.random() * people.length)];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quotesObjects.push({
    band,
    person,
    quote,
  });
};

const logRandomQuote = () => {
  console.log(quotesObjects[Math.floor(Math.random() * quotesObjects.length)]);
};

let i = 10;
while (i--) {
  generateQuote();
}

logRandomQuote();
