const router = require('express').Router();

const authController = require('./controllers/auth_Controller');

router.post('/signup', authController.Signup);

router.post('/login', authController.Login)

module.exports = router;
