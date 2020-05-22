let potatoes = require("../potatoes");
const { Potato } = require("../db/models");

exports.potatoCreate = async (req, res) => {
  try {
    const newPotato = await Potato.create(req.body);
    res.status(201).json(newPotato);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.potatoList = async (req, res) => {
  try {
    const potatoes = await Potato.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(potatoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.potatoDetail = async (req, res) => {
  try {
    const { potatoId } = req.params;
    const potato = await Potato.findByPk(potatoId);
    if (potato) {
      res.json(potato);
    } else {
      res.status(404).json({ message: "Potato not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.potatoUpdate = async (req, res) => {
  const { potatoId } = req.params;
  try {
    const foundPotato = await Potato.findByPk(potatoId);
    if (foundPotato) {
      await foundPotato.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Potato not found" });
    }
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};

exports.potatoDelete = async (req, res) => {
  const { potatoId } = req.params;
  try {
    const foundPotato = await Potato.findByPk(potatoId);
    if (foundPotato) {
      await foundPotato.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Potato not found" });
    }
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};
