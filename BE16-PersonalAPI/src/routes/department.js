'use strict';

const router = require('express').Router();
const {BlogCategory, BlogPost} = require('../controllers/blogController');
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
.get(BlogPost.list)
.post(BlogPost.create);

router.route('/blogs/post/:id')
.get(BlogPost.read)
.put(BlogPost.update)
.delete(BlogPost.delete);

module.exports = router;
 