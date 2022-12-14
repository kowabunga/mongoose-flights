const { Schema, model } = require('mongoose');

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/,
    unique: true,
  },
  price: {
    type: Number,
    min: 0,
  },
  flight: {
    type: Schema.Types.ObjectId,
    ref: 'Flight',
  },
});

module.exports = model('Ticket', ticketSchema);
