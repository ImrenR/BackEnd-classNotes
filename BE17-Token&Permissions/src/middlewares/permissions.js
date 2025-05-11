'use strict'

module.exports = {
  isLogin : (req, res, next) => {
    if (req.user && req.user.isActive) {

      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error('No permission to access this resource');
    }
  },
  isAdmin: (req, res, next) => {
    if (req.user && req.user.isActive && req.user.isAdmin ) {

      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error('No permission to access this resource');
    }
  },
  isAdminorLead: (req, res, next) => {

    const departmentId = req.params?.id
    if (req.user && req.user.isActive && (req.user.isAdmin || (req.user.isLead && req.user.departmentId == departmentId)) ) {

      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error('No permission: You must login and be Admin or Department Lead');
    }
  },
}