const mongoose = require('mongoose')

const partySchema = mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, default: 'Lots of Tiny Things'},
  source: {type: String, default: 'Very Important Stuff!'},
  cost: {type: Number, default: 0},
  date: {type: Date, default: Date.now},
}, {timestamps: true})

module.exports = mongoose.model('Party', partySchema)
