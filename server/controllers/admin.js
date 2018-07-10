const mongoose = require('mongoose');
const async = require('async');

const UserModel = mongoose.model('User');
const ServiceModel = mongoose.model('Service');


module.exports = {
  async index(req, res) {
    try {
      async.parallel(
        {
          users: (done) => {
            UserModel.find().exec(done);
          },
          services: (done) => {
            ServiceModel.find().exec(done);
          },
        },
        (err, results) => {
          res.send({
            message: 'You have reached the admin page',
            users: results.users,
            services: results.services,
          });
        },
      );
    } catch (error) {
      res.status(500).send({
        error,
      });
    }
  },
  async createService(req, res, next) {
    let user;
    let savedService;
    try {
      user = new UserModel(req.body);
      user.setPassword(req.body.password);
      user.role = 'service';

      const service = new ServiceModel(req.body);
      service.uri = await ServiceModel.encodeURI(user.name);
      savedService = await service.save();
    } catch (err) {
      next(err);
    }
    try {
      // eslint-disable-next-line
      user.linkedObject = savedService._id;
      const savedUser = await user.save();
      res.send({
        user: savedUser,
        service: savedService,
      });
    } catch (error) {
      // eslint-disable-next-line
      ServiceModel.remove({ id: savedService._id });
      next(error);
    }
  },
  async wipeServices(req, res) {
    try {
      await async.parallel({
        services: (done) => {
          ServiceModel.remove({}).exec(done);
        },
        users: (done) => {
          UserModel.remove({ role: 'service' }).exec(done);
        },
      });
      res.send({
        message: 'wiped',
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error,
      });
    }
  },
};
