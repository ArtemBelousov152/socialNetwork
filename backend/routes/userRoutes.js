const Router = require('express');
const usersController = require('../controller/usersController');
const router = new Router();

router.post('/getuser', usersController.getUser)
router.post('/register', usersController.registerUser)

module.exports = router;