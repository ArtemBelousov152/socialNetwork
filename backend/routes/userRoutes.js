const Router = require('express');
const usersController = require('../controller/usersController');
const router = new Router();

router.get('/user', usersController.getUser)

module.exports = router;