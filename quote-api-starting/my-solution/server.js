const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

// GET ALL
// GET RANDOM
// GET BY NAME
// POST NEW QUOTE
app.use(express.static("public"));
