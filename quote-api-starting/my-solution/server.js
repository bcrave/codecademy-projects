const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

// GET ALL OR BY NAME
app.get("/api/quotes", (req, res) => {
  if (req.query.person === undefined) return res.send({ quotes });
  const quotesByPerson = quotes.filter((quote) => {
    return quote.person === req.query.person;
  });
  res.send({ quotes: quotesByPerson });
});

// GET RANDOM
app.get("/api/quotes/random", (req, res) => {
  res.send(getRandomElement(quotes));
});

// POST NEW QUOTE
app.post("/api/quotes", (req, res) => {
  const newQuote = { quote: req.query.quote, person: req.query.person };
  quotes.push(newQuote);
  if (req.query.quote && req.query.person) {
    quotes.push(newQuote);
    res.send({ quote: newQuote });
  } else {
    res.sendStatus(400);
  }
});

// DELETE QUOTE BY NAME
app.delete("/api/quotes/:person", (req, res) => {
  const personName = req.params.person;
  const newQuotes = quotes.filter((quote) => {
    return quote.person !== personName;
  });
  res.send(newQuotes);
});

// DELETE QUOTE BY QUOTE
app.delete("/api/quotes/:quote", (req, res) => {
  const quoteToDelete = req.params.quote;
  const newQuotes = quotes.filter((quote) => {
    return quote.quote !== quoteToDelete;
  });
  res.send(newQuotes);
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
