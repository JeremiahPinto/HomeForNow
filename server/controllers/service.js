module.exports = {
  async index(req, res, next) {
    try {
      res.send({
        message: 'You have reached the service page',
        user: req.user,
      });
    } catch (error) {
      next(error);
    }
  },
};
