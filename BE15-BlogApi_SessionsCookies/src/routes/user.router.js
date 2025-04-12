'use strict';
const router = require('express').Router();
const User= require ('../controllers/userController');

router.route('/users')
.get(User.list)
.post(User.create);

router.route('/users/:id')
.get(User.read)
.put(User.update)
.delete(User.delete);

router.post('/login',User.login);
router.post('/logout',User.logout);

module.exports = router;