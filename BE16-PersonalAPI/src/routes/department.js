'use strict';

const router = require('express').Router();
const department = require('../controllers/department');
//department
router.route('/departments')
.get(department.list)
.post(department.create);

router.route('/departments/:id')
.get(department.read)
.put(department.update)
.delete(department.delete);


module.exports = router
 