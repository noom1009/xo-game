const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const path = require("path");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const crypto = require("crypto");
const pageControllers = require("../../controllers/pageControllers");

router.get(
  "/",
  pageControllers.getPageController,
  function (req, res, next) {}
);

router.post(
  "/",
  pageControllers.getPageController,
  function (req, res, next) {}
);

module.exports = router;