const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const UserService = require('../services/userService'); // Import the actual UserService

const userController = new UserController(UserService); // Instantiate the controller with the service

router.post('/register', (req, res) => userController.createUser(req, res));
router.post('/login', (req, res) => userController.login(req, res));

module.exports = router;

