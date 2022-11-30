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
  },
});

flightSchema.pre('save', function (next) {
  // Date
  const date = new Date(this.departs);

  this.departs = date.setFullYear(date.getFullYear() + 1);

  next();
});

module.exports = model('Flight', flightSchema);
