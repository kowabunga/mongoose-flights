const Flight = require('../models/flight');

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add a flight' });
}

function create(req, res) {
  console.log(req.body);

  // Check if user entered a departure date for the flight. If not, remove the departs key/value pair from req.body so the default value from our Flights model applies
  if (req.body.departs === '') {
    delete req.body.departs;
  }

  Flight.create(req.body, (err, flight) => {
    if (err) {
      console.log(err);
    }

    res.redirect('/');
  });
}

function index(req, res) {
  Flight.find({}, (err, flights) => {
    if (err) {
      console.log(err);
    }

    res.render('flights/index', { flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    if (err) {
      console.log(err);
    }

    console.log(flight);
    res.render('flights/show', { flight });
  });
}

module.exports = {
  new: newFlight,
  create,
  index,
  show,
};
