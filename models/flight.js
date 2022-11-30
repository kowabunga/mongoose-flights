const { Schema, model } = require('mongoose');

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Delta', 'Southwest', 'United'],
  },
  airport: {
    type: String,
    enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: new Date().setFullYear(new Date().getFullYear() + 1),
  },
});

module.exports = model('Flight', flightSchema);
