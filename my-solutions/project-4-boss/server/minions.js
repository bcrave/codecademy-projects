const minionsRouter = require("express").Router();

module.exports = minionsRouter;

const {
  addToDatabase,
  deleteFromDatabasebyId,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
} = require("./db");

minionsRouter.param("minionId", (req, res, next, id) => {
  const minion = getFromDatabaseById("minions", id);
  if (minion) {
    req.minion = minion;
    next();
  } else {
    res.status(404).send();
  }
});

minionsRouter.get("/", (req, res) => {
  res.send(getAllFromDatabase("minions"));
});

minionsRouter.post("/", (req, res) => {
  const newMinion = addToDatabase("minions", req.body);
  res.status(201).send(newMinion);
});

minionsRouter.get("/:minionId", (req, res) => {
  res.send(req.minion);
});

minionsRouter.put("/:minionId", (req, res) => {
  const updatedMinion = updateInstanceInDatabase("minions", req.body);
  res.send(updatedMinion);
});

minionsRouter.delete("/:minionId", (req, res) => {
  deleteFromDatabasebyId("minions", req.params.minionId);
});
