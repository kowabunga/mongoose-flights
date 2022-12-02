const Flight = require('../models/flight');

async function create(req, res) {
  try {
    const flightDoc = await Flight.findById(req.params.id);

    const departure = new Date(flightDoc.departs);
    let arrival = departure.setTime(
      // current time + :
      // 1000 ms * 60 = 1min
      // 60s * 60 = 1 hour
      // 1 hour * some number of hours
      departure.getTime() + 1000 * 60 * 60 * Math.floor(Math.random() * 10)
    );
    req.body.arrival = new Date(arrival);
    flightDoc.destinations.push(req.body);

    await flightDoc.save();

    res.redirect(`/flights/${req.params.id}`);
  } catch (error) {
    console.log(error);
    res.send('Error, check terminal');
  }
}

module.exports = {
  create,
};
