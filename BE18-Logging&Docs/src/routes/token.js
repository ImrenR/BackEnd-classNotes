'use strict'

const router = require('express').Router();
const {list, create, update, deletee, read} = require('../controllers/token');
const {isAdmin, isLogin} = require('../middlewares/permissions');



//tokens
router.use(isAdmin);
router.route('/')
.get(isLogin,list).post(isAdmin,create);

router.route('/:id')
.get(isLogin,read)
.put(isAdmin,update)
.delete(isAdmin,deletee);



module.exports = router
 