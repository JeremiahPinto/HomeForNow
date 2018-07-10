module.exports = {
  checkRole(role) {
    return async (req, res, next) => {
      try {
        if (!req.user) {
          res.status(403).send({
            error: 'Unauthorised',
          });
        } else if (req.user.role !== role) {
          res.status(403).send({
            error: 'Unauthorised, you are the wrong role to visit this page',
          });
        }
        next(null, req.user);
      } catch (err) {
        next(err);
      }
    };
  },
};
