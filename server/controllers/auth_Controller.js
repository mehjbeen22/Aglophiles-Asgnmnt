const bcrypt = require('bcrypt');
const { registrationModel } = require('../models/schema');
const {
  registrationModelValidation,
  loginModelValidation,
} = require('../models/validation');

const Signup = async (req, res, next) => {
  const { email, password } = req.body;

  const { error } = registrationModelValidation(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error!',
      error: error.details[0].message,
    });
  }

  try {
    const existingUser = await registrationModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Email is already registered!',
      });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new registrationModel({
      email,
      password: hashedPassword,
    });

    await user.save();

    return res
      .status(201)
      .json({ message: 'Account Created Successfully', success: true });
  } catch (error) {
    console.error(error);
    next(error); // Passing error to the error handling middleware
  }
};

const Login = async (req, res, next) => {
  const { email, password } = req.body;

  const { error } = loginModelValidation(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error!',
      error: error.details[0].message,
    });
  }

  try {
    const user = await registrationModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication Failed! User not found.',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Authentication Failed! Incorrect password.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Login Successful',
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    next(error); // Passng error to the error handling middleware
  }
};

module.exports = { Signup, Login };
