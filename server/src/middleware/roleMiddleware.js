// @desc    Restrict access to specific roles
// @usage   router.get('/', protect, authorize('admin'), handler)
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      res.status(401);
      throw new Error('Not authorized, no user');
    }

    if (!roles.includes(req.user.role)) {
      res.status(403);
      throw new Error(`Access denied: role ${req.user.role} is not authorized to access this resource`);
    }

    next();
  };
};

module.exports = { authorize };