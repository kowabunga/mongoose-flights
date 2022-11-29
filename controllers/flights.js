const Flight = require('../models/flight');

function newFlight(req, res, next) {
  res.render('flights/new', { title: 'Add a flight' });
}

function create(req, res, next) {
  Flight.create(req.body, (err, flight) => {
    if (err) {
      console.log(err);
    }

    res.redirect('/');
  });
}

module.exports = {
  new: newFlight,
  create,
};
