'use strict';
const router = require('express').Router();
const User= requore ('../controllers/userController');

router.route('/users')
.get(User.list)


