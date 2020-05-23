const express = require("express");
const router = express.Router();

const {
  fetchPotato,
  potatoCreate,
  potatoList,
  potatoDetail,
  potatoUpdate,
  potatoDelete,
} = require("../controllers/potatoController");

router.param("potatoId", async (req, res, next, potatoId) => {
  const potato = await fetchPotato(potatoId, next);
  if (potato) {
    req.potato = potato;
    next();
  } else {
    const err = new Error("Potato Not Found");
    err.status = 404;
    next(err);
  }
});

router.post("/", potatoCreate);

router.get("/", potatoList);

router.get("/:potatoId", potatoDetail);

router.put("/:potatoId", potatoUpdate);

router.delete("/:potatoId", potatoDelete);

module.exports = router;
