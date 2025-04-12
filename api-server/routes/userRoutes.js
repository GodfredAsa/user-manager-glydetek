// routes/userRoutes.js
const express = require('express');
const { getUserProfile, createUser } = require('../controllers/userController');
const { protect } = require('../middleware/authenticationHandler');
const router = express.Router();

router.route('/sign-up')
      .post(createUser)

router.route('/users/:email/profile')
      .get(protect, getUserProfile);

module.exports = router;
