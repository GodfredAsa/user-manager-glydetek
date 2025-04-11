const User = require("../models/userModel");
const { retResponse } = require("../response/retResponse");
const bcrypt = require("bcryptjs"); 
const jwt = require('jsonwebtoken');


const authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).send(retResponse(400, "Invalid User email or password", null));
  }
  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(400).send(retResponse(400, "Invalid User email or password", null));
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });

  res.json(retResponse(200, "Login successful", token));
};

module.exports = { authenticateUser };
