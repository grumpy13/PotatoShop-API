let potatoes = require("../potatoes");
const { Potato } = require("../db/models");

exports.fetchPotato = async (potatoId, next) => {
  try {
    const potato = await Potato.findByPk(potatoId);
    return potato;
  } catch (error) {
    next(error);
  }
};

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

exports.potatoDetail = async (req, res) => res.json(req.potato);

exports.potatoUpdate = async (req, res) => {
  try {
    await req.potato.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.potatoDelete = async (req, res) => {
  try {
    await req.potato.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
