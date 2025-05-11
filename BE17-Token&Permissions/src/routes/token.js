'use strict';

const router = require('express').Router();
const {list, create, update, deletee, read} = require('../controllers/tokens');
//tokens
router.route('/')
.get(isLogin,list).post(create);

router.route('/:id')
.get(read)
.put(update)
.delete(deletee);



module.exports = router
 