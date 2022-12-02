const Flight = require('../models/flight');

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add a flight' });
}

async function create(req, res) {
  // Check if user entered a departure date for the flight. If not, remove the departs key/value pair from req.body so the default value from our Flights model applies
  if (req.body.departs === '') {
    delete req.body.departs;
  }

  try {
    const flightDoc = await Flight.create(req.body);

    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.send('Error, check terminal');
  }
}

async function index(req, res) {
  try {
    const flightDocs = await Flight.find({});
    res.render('flights/index', { flights: flightDocs });
  } catch (error) {
    console.log(error);
    res.send('Error, check terminal');
  }
}

async function show(req, res) {
  try {
    const flightDoc = await Flight.findById(req.params.id);
    res.render('flights/show', { flight: flightDoc });
  } catch (error) {
    console.log(error);
    res.send('Error, check terminal');
  }
}

module.exports = {
  new: newFlight,
  create,
  index,
  show,
};
