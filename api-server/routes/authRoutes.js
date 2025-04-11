const express = require('express');
const {authenticateUser } = require("../controllers/authController")
const router = express.Router();

router.route('/')
      .post(authenticateUser)

module.exports = router;