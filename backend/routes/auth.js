
const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth');

router.post('/api/auth/signup', AuthController.Signup);

router.post('/api/auth/verifyemail', AuthController.verifyEmail);

router.post('/api/auth/login', AuthController.Login);

router.post('/api/auth/loginwithtoken', AuthController.autoLogin);

router.post('/api/auth/sendemailverificationlink', AuthController.sendEmailVerificationLink);

router.get('/api/auth/getuser', AuthController.getUser);

router.get('/api/auth/logout', AuthController.logout);

module.exports = router;
