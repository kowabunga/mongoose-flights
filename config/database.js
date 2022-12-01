const mongoose = require('mongoose');

// flights, connect to a flights db or create a flights db
mongoose.connect('mongodb://127.0.0.1/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', function (err) {
  console.log(`There was an ${err}`);
});
