'use strict';

const router = require('express').Router();
const BlogCategory = require('../controllers/blogController');

router.route('/blogs')
.get(BlogCategory.list)
.post(BlogCategory.create);
module.exports = router;
// router.route('/blogs').post(BlogCategory.create);
// router.route('/blogs/:id').put(BlogCategory.update);
// router.route('/blogs/:id').delete(BlogCategory.delete);
// router.route('/blogs/:id').get(BlogCategory.list);
// router.route('/blogs').get(BlogCategory.list);
// router.route('/blogs').post(BlogCategory.create);
// router.route('/blogs/:id').put(BlogCategory.update);