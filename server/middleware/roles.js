module.exports = {
  checkAdmin(req, res, next) {
    if (!req.user) {
      res.status(403).send({
        error: 'Unauthorised',
      });
    } else if (req.user.role !== 'admin') {
      res.status(403).send({
        error: 'Unauthorised, you are the wrong role to visit this page',
      });
    }
    next(null, req.user);
  },
  checkService(req, res, next) {
    if (!req.user) {
      res.status(403).send({
        error: 'Unauthorised',
      });
    } else if (req.user.role !== 'service') {
      res.status(403).send({
        error: 'Unauthorised, you are the wrong role to visit this page',
      });
    }
    next(null, req.user);
  },
};
