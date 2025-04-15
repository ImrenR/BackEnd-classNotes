'use strict';
const router = require('express').Router();
const user = require('../controllers/user.controller');
router.route('/users')
.get(user.list)
.post(user.create);

router.route('/users/id')
.get(user.read)
.put(user.update)



module.exports= router;