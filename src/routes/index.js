const express = require("express");
const router = express.Router();
const path = require("path");

const views = path.join(__dirname, "/../views");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/", isLoggedIn, (req, res, next) => {
  try {
    res.sendFile(path.join(views, "index.html"));
  } catch (err) {
    next(err); // Pasa el error al middleware global
  }
});

router.get("/register", (req, res, next) => {
  try {
    res.sendFile(path.join(views, "register.html"));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
