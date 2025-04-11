// routes/userRoutes.js
const express = require('express');
const { getUserProfile, createUser } = require('../controllers/userController');
const { protect } = require('../middleware/authenticationHandler');
const router = express.Router();

router.route('/')
      .post(createUser)

router.route('/profile')
      .get(protect, getUserProfile);

module.exports = router;
