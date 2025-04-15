'use strict';

const router =require('express').Router();

const blogCategory = require('../controllers/blog.controller');

 router.route("/blogs")
 .get(blogCategory.list)
 .post(blogCategory.create)

  router.route("/blogs/:id")
  .get(blogCategory.read)
  .put(blogCategory.update)
  .delete(blogCategory.delete)

 module.exports = router;