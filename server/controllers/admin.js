/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
const mongoose = require('mongoose');
const async = require('async');

const UserModel = mongoose.model('User');
const ServiceModel = mongoose.model('Service');


module.exports = {
  async index(req, res, next) {
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
      next(error);
    }
  },
  async createService(req, res, next) {
    const newService = req.body.service;
    try {
      const user = new UserModel(newService);
      user.setPassword(newService.password);
      user.role = 'service';

      const service = new ServiceModel(newService);
      service.uri = await ServiceModel.encodeURI(user.name);
      const savedService = await service.save();
      try {
        user.linkedObject = savedService._id;
        const savedUser = await user.save();
        res.send({
          user: savedUser,
          service: savedService,
        });
      } catch (error) {
        ServiceModel.remove({ id: savedService._id });
        next(error);
      }
    } catch (err) {
      next(err);
    }
  },
  async wipeServices(req, res, next) {
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
      next(error);
    }
  },
};
