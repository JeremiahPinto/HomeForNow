module.exports = {
  async index(req, res) {
    try {
      res.send({
        message: 'You have reached the service page',
        user: req.user,
      });
    } catch (error) {
      res.status(500).send({
        error,
      });
    }
  },
};
