/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
const mongoose = require('mongoose');

const UserModel = mongoose.model('User');
const ServiceModel = mongoose.model('Service');

module.exports = {
  async index(req, res, next) {
    try {
      const service = await ServiceModel.findOne({ _id: req.user.linkedObject });
      res.send({
        message: 'You have reached the service page',
        user: req.user,
        service,
      });
    } catch (error) {
      next(error);
    }
  },

  async updateService(req, res, next) {
    const service = req.body;
    try {
      const updatedUser = await UserModel.findOneAndUpdate({
        _id: req.user._id,
      }, service);

      try {
        service.uri = await ServiceModel.encodeURI(updatedUser.name);

        const updatedService = await ServiceModel.save({
          _id: updatedUser.linkedObject,
        }, service);

        res.send({
          user: updatedUser,
          service: updatedService,
        });
      } catch (error) {
        next(error);
      }
    } catch (err) {
      next(err);
    }
  },

  async getBeds(req, res, next) {
    try {
      const service = await ServiceModel.findOne({ _id: req.user.linkedObject }, 'beds');
      res.send({
        beds: service.beds,
      });
    } catch (error) {
      next(error);
    }
  },
  async updateBeds(req, res, next) {
    if (req.params.bedID) {
      const bedId = req.params.bedID;
      try {
        const updatedService = await ServiceModel.updateOne({
          _id: req.user.linkedObject,
          'beds._id': bedId,
        }, {
          $set: { 'beds.$.isOccupied': req.body.isOccupied },
        });
        res.send({
          updatedService,
        });
      } catch (error) {
        next(error);
      }
    }
  },
  async editBeds(req, res, next) {
    if (req.params.bedID) {
      const bedId = req.params.bedID;
      try {
        const updatedService = await ServiceModel.updateOne({
          _id: req.user.linkedObject,
          'beds._id': bedId,
        }, {
          $set: { 'beds.$': req.body },
        });
        res.send({
          updatedService,
        });
      } catch (error) {
        next(error);
      }
    } else {
      const newBeds = req.body;
      try {
        const service = await ServiceModel.updateOne({ _id: req.user.linkedObject },
          { $set: { beds: newBeds } });
        res.send({
          service,
        });
      } catch (error) {
        next(error);
      }
    }
  },
};
