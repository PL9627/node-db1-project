const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const accounts = await db.select("*").from("accounts");

    res.json(accounts);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});
module.exports = router;
