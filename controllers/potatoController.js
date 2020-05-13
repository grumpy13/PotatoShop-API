let potatoes = require("../potatoes");

exports.potatoCreate = (req, res) => {
  const id = potatoes[potatoes.length - 1].id + 1;
  const newPotato = { id, ...req.body };
  potatoes.push(newPotato);
  res.status(201).json(newPotato);
};

exports.potatoList = (req, res) => res.json(potatoes);

exports.potatoDetail = (req, res) => {
  const { potatoId } = req.params;
  const foundPotato = potatoes.find((potato) => potato.id === +potatoId);
  if (foundPotato) {
    res.json(foundPotato);
  } else {
    res.status(404).json({ message: "Potato not found" });
  }
};

exports.potatoUpdate = (req, res) => {
  const { potatoId } = req.params;
  const foundPotato = potatoes.find((potato) => potato.id === +potatoId);
  if (foundPotato) {
    for (const key in req.body) foundPotato[key] = req.body[key];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Potato not found" });
  }
};

exports.potatoDelete = (req, res) => {
  const { potatoId } = req.params;
  const foundPotato = potatoes.find((potato) => potato.id === +potatoId);
  if (foundPotato) {
    potatoes = potatoes.filter((potato) => potato.id !== +potatoId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Potato not found" });
  }
};
