'use strict';

const router = require('express').Router();
const BlogCategory = require('../controllers/blogController');

router.route('/blogs')
.get(BlogCategory.list)
.post(BlogCategory.create);
module.exports = router;
