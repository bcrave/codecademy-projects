const ideasRouter = require("express").Router();

const { getAllFromDatabase } = require("./db");

ideasRouter.get("/", (req, res) => {
  res.send(getAllFromDatabase("ideas"));
});

ideasRouter.post("/", (req, res) => {
  const newIdea = addToDatabase("ideas", req.body);
  res.status(201).send(newIdeas);
});

module.exports = ideasRouter;
