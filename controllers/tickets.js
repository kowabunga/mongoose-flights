const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

async function newTicket(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render('tickets/new', { flight });
}

async function create(req, res) {
  try {
    const { seat, price } = req.body;
    const { id: flightId } = req.params;

    const ticket = await Ticket.create({ seat, price, flight: flightId });

    res.redirect(`/flights/${flightId}`);
  } catch (error) {
    console.log(error);
    res.send('error, check in terminal');
  }
}

module.exports = {
  create,
  new: newTicket,
};
