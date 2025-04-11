const Joi = require('joi');

const userValidationSchema = Joi.object({
  firstName: Joi.string().min(3).max(100).required()
    .messages({
      'string.base': 'First name must be a string.',
      'string.empty': 'First name cannot be empty.',
      'string.min': 'First name should have a minimum length of 3 characters.',
      'string.max': 'First name can have a maximum length of 100 characters.',
      'any.required': 'First name is required.'
    }),

  lastName: Joi.string().min(3).max(100).required()
    .messages({
      'string.base': 'Last name must be a string.',
      'string.empty': 'Last name cannot be empty.',
      'string.min': 'Last name should have a minimum length of 3 characters.',
      'string.max': 'Last name can have a maximum length of 100 characters.',
      'any.required': 'Last name is required.'
    }),

  preferredName: Joi.string().min(3).max(100)
    .messages({
      'string.base': 'Preferred name must be a string.',
      'string.empty': 'Preferred name cannot be empty.',
      'string.min': 'Preferred name should have a minimum length of 3 characters.',
      'string.max': 'Preferred name can have a maximum length of 100 characters.'
    }),

  gender: Joi.string().valid('Male', 'Female').required()
    .messages({
      'any.only': 'Gender must be either Male or Female.',
      'any.required': 'Gender is required.'
    }),

  email: Joi.string().min(7).max(100).required()
    .messages({
      'string.base': 'Email must be a string.',
      'string.empty': 'Email cannot be empty.',
      'string.min': 'Email should have a minimum length of 7 characters.',
      'string.max': 'Email can have a maximum length of 100 characters.',
      'any.required': 'Email is required.'
    }),

  // Password validation with custom error messages
  password: Joi.string()
  .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/, 'password')
  .required()
  .messages({
    'string.pattern.name': 'Password must be at least 6 characters long, include at least one uppercase letter, one lowercase letter, and one special character (e.g., !, @, #, $, %, ^, &, *).',
    'any.required': 'Password is required.'
  })
});

module.exports = { userValidationSchema };
