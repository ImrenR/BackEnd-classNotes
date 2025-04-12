'use strict';

const router = require('express').Router();
const {BlogCategory, blogPost} = require('../controllers/blogController');
//BlogCategory
router.route('/blogs/category')
.get(BlogCategory.list)
.post(BlogCategory.create);

router.route('/blogs/category/:id')
.get(BlogCategory.read)
.put(BlogCategory.update)
.delete(BlogCategory.delete);

//BlogPostposd
router.route('/blogs/post')
.get(blogPost.list)
.post(blogPost.create);

router.route('/blogs/post/:id')
.get(blogPost.read)
.put(blogPost.update)
.delete(blogPost.delete);

module.exports = router;
 