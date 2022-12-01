const Flight = require('../models/flight');

function create(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    const departure = new Date(flight.departs);
    let arrival = departure.setTime(
      // current time + :
      // 1000 ms * 60 = 1min
      // 60s * 60 = 1 hour
      // 1 hour * some number of hours
      departure.getTime() + 1000 * 60 * 60 * Math.floor(Math.random() * 10)
    );
    req.body.arrival = new Date(arrival);
    flight.destinations.push(req.body);
    flight.save(err => {
      console.log(err);
      res.redirect(`/flights/${req.params.id}`);
    });
  });
}

module.exports = {
  create,
};
