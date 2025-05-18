'use strict';

const router = require('express').Router();
const department = require('../controllers/department')
const {islogin, isAdmin, isAdminorLead} = require ('../middlewares/permissions');
//department
router.route('/')
.get(islogin,department.list)
.post(isAdmin,department.create);

router.route('/:id')
.get(isLogin,department.read)
.put(isAdminorLead,department.update)
.delete(isAdminorLead,department.delete);

router.get('/:id/personnels', department.personnels)

module.exports = router
 