module.exports = {
  async index(req, res) {
    try {
      res.send({
        message: 'You have reached the admin page',
      });
    } catch (error) {
      res.status(500).send({
        error,
      });
    }
  },
};
