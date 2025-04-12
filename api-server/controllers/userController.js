
const  User = require("../models/userModel");
const { retResponse } = require("../response/retResponse");
const { userValidationSchema } = require('../validation/userValidation');


const createUser = async (req, res) => {
  try {
    const { error } = userValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json(retResponse(400, error.details[0].message, null ));
    }

    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) return res.status(400).json(retResponse(400, "User with this email already exists!", null));

    const { firstName, lastName, preferredName, gender, email, password } = req.body;
    const newUser = new User({ firstName, lastName, preferredName, gender, email, password });
    await newUser.save();
    const userData = await User.findOne({email}).select('-password')

    res.status(201).json(retResponse(201, "User Created Successfully", userData));

  } catch(error) {
    console.error('Error in user registration:', error);
    res.status(500).json({
      message: 'Something went wrong while registering the user.',
    });
  }
};


const getUserProfile = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({email}).select('-password')
    if (!user) {
      return res.status(404).json(retResponse(404, "User with email not found", null));
    }
    res.status(200).json(retResponse(200, null , user));
  } catch (error) {
    console.error("Error getting user profile:", error);
    res.status(500).json(retResponse(500, "Server error", null));
  }
};
  
  module.exports = { getUserProfile, createUser };