'use strict';

const router = require('express').Router();
const BlogCategory = require('../controllers/blogController');

router.route('/blogs')
.get(BlogCategory.list)
.post(BlogCategory.create);

router.route('/blogs/:Id')
.get(BlogCategory.read)
.put(BlogCategory.update)
.delete(BlogCategory.delete);

module.exports = router;
 