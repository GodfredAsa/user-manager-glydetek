const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { retResponse } = require("../response/retResponse");

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log({token});
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.userId;
      const loggedInUser = await User.findById(userId).select('-password');

      if (!loggedInUser) {
        return res.status(401).json(retResponse(401, "Invalid token provided", null));
      }
      req.user = loggedInUser;
      next(); 
    } catch (error) {
      console.error('Token verification failed:', error.message);
      return res.status(401).json(retResponse(401, "Not authorized, token failed", null));
    }
  } else {
    return res.status(401).json(retResponse(401, "No token provided", null));
  }
};

module.exports = { protect };
