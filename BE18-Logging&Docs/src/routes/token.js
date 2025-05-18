'use strict'

const router = require('express').Router()
const {list, create, update, deletee, read} = require('../controllers/tokens');
const {isAdmin, isLogin} = require('../middlewares/permissions');



//tokens
router.use(isAdmin);
router.route('/')
.get(isLogin,department.list).post(isAdmin,department.create);

router.route('/:id')
.get(isLogin,department.read)
.put(isAdmin,department.update)
.delete(isAdmin,department.deletee);



module.exports = router
 