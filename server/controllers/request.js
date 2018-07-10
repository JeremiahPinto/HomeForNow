const mongoose = require('mongoose');

const ServiceModel = mongoose.model('Service');

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
}

// function hasBedWithChild(services) {
//   return services.filter((service) => {
//     for (let i = 0; i < service.beds.length; i += 1) {
//       if (service.beds[i].bedType === 'ParentChild') return true;
//     }
//     return false;
//   });
// }

module.exports = {
  async search(req, res, next) {
    // const name = req.body.fName.concat(' ', req.body.lName);
    const type = req.body.lengthOfStay;
    const age = getAge(req.body.dob);
    const bedType = req.body.child ? 'ParentChild' : 'Single';
    const genders = (req.body.gender === 'Other') ? ['Male', 'Female', 'Either'] : [req.body.gender, 'Either'];


    try {
      const services = await ServiceModel.find(
        {
          $and: [
            { serviceType: type },
            { 'ageRange.maxAge': { $gte: age } },
            { 'ageRange.minAge': { $lte: age } },
            {
              'address.coordinates.coordinates': {
                $near: {
                  $geometry: { type: 'Point', coordinates: [req.body.long, req.body.lat] },
                },
              },
            },
            {
              beds: {
                bedType,
                genders: { $in: genders },
              },
            },
          ],
        },
        'name description address uri logo thankyouMessage img beds',
      );
      res.send({
        services,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

// module.exports.showLocations = (req, res) => {
//   const name = req.body.fName + ' ' + req.body.lName;
//   const longTerm = (req.params.lengthOfStay === 'long_term');
//   const type = (longTerm ? ['transitional'] : ['crisis']);
//   const age = parseInt(timeago().format(req.body.dob).split(' ')[0], 10);

//   Service.find(
//     {
//       $and: [
//         { serviceType: { $in: type } },
//         { 'ageRange.maxAge': { $gte: age } },
//         { 'ageRange.minAge': { $lte: age } },
//         {
//           'address.coordinates.coordinates': {
//             $near: {
//               $geometry: { type: 'Point', coordinates: [req.body.long, req.body.lat] },
//             },
//           },
//         },
//       ],
//     },
//     'name description address uri logo thankyouMessage img beds',
//   ).exec()
//     .then((services) => {
//       if (req.body.child) {
//         // eslint-disable-next-line
//         services = hasBedWithChild(services);
//       }
//       let { gender } = req.body;
//       if (gender === 'Other') gender = 'Either';
//       services = servicesWithBedGender(services, gender);
//       // Sort services into available and unavailable
//       const available = [];
//       const availableImagePromises = [];
//       const availableLogosPromises = [];
//       const unavailable = [];
//       const unavailableLogosPromises = [];
//       const unavailableImagePromises = [];
//       for (let i = 0; i < services.length; i += 1) {
//         if (services[i].beds) {
//           if (services[i].isAvailable(services[i].beds)) {
//             available.push(services[i]);
//             // available[available.length - 1].available =
//             //   services[i].isAvailable(services[i].beds);
//             availableImagePromises.push(images.getImageForService(services[i].img[0]));
//             availableLogosPromises.push(images.getImageForService(services[i].logo));
//           } else {
//             unavailable.push(services[i]);
//             // unavailable[unavailable.length - 1].available =
//             //   services[i].isAvailable(services[i].beds);
//             unavailableImagePromises.push(images.getImageForService(services[i].img[0]));
//             unavailableLogosPromises.push(images.getImageForService(services[i].logo));
//           }
//         }
//       }

//       Promise.all(availableImagePromises).then((availableImages) => {
//         Promise.all(unavailableImagePromises).then((unavailableImages) => {
//           Promise.all(availableLogosPromises).then((availableLogos) => {
//             Promise.all(unavailableLogosPromises).then((unavailableLogos) => {
//               res.render('bedVacanciesList', {
//                 userName: name,
//                 serviceType: type,
//                 locations: available,
//                 locationImgs: availableImages,
//                 locationLogos: availableLogos,
//                 dlocations: unavailable,
//                 dlocationImgs: unavailableImages,
//                 dlocationLogos: unavailableLogos,
//                 userCoords: {
//                   long: req.body.long,
//                   lat: req.body.lat,
//                 },
//               });
//             });
//           });
//         }).catch(() => {
//           res.render('bedVacanciesList', {
//             title: 'For Now',
//             tagline: 'A place to stay',
//             locations: available,
//             dlocations: unavailable,
//             userCoords: {
//               long: req.body.long,
//               lat: req.body.lat,
//             },
//           });
//         });
//       }).catch(() => {
//         res.render('bedVacanciesList', {
//           title: 'For Now',
//           tagline: 'A place to stay',
//           locations: available,
//           dlocations: unavailable,
//           userCoords: {
//             long: req.body.long,
//             lat: req.body.lat,
//           },
//         });
//       });
//     })
//     .catch((err) => {
//       res.redirect('/');
//       throw new Error(err);
//     });
// };

// function servicesWithBedGender(services, gender) {
//   return services.filter((service) => {
//     for (let i = 0; i < service.beds.length; i += 1) {
//       if (service.beds[i].gender === 'Either' || service.beds[i].gender === gender) {
//         return true;
//       }
//     }
//     return false;
//   });
// }
