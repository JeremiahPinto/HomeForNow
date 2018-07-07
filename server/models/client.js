const MC = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/homefornow';

MC.connect(url, (err, db) => {
  if (err) console.log(err);
  console.log('Database created!');
  db.close();
});
