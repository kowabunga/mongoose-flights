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
    console.log(seat, price, flightId);

    const ticket = await Ticket.create({ seat, price, flight: flightId });

    res.redirect(`/flights/${flightId}`);
  } catch (error) {
    console.log(error);
    res.send('error, check in terminal');
  }
}

async function getAllTicketsForFlight(req, res) {
  try {
    // You don't need to do a double query or populate... you can just query for the ticket by the flight id passed in as the req.params.id
    const tickets = await Ticket.find({ flight: req.params.id });

    console.log(tickets);
  } catch (error) {
    console.log(error);
    res.send('error, check in terminal');
  }
}

module.exports = {
  create,
  new: newTicket,
  index: getAllTicketsForFlight,
};
