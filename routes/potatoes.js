const express = require("express");
const router = express.Router();

const {
  potatoCreate,
  potatoList,
  potatoDetail,
  potatoUpdate,
  potatoDelete,
} = require("../controllers/potatoController");

router.post("/", potatoCreate);

router.get("/", potatoList);

router.get("/:potatoId", potatoDetail);

router.put("/:potatoId", potatoUpdate);

router.delete("/:potatoId", potatoDelete);

module.exports = router;
