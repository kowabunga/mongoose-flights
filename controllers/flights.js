const Flight = require('../models/flight');

function newFlight(req, res, next) {
  res.render('flights/new', { title: 'Add a flight' });
}

function create(req, res, next) {
  console.log(req.body);
  Flight.create(req.body, (err, flight) => {
    if (err) {
      console.log(err);
    }

    res.redirect('/');
  });
}

function index(req, res, next) {
  Flight.find({}, (err, flights) => {
    if (err) {
      console.log(err);
    }

    res.render('flights/index', { flights });
  });
}

module.exports = {
  new: newFlight,
  create,
  index,
};
