const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  points: { type: Number, default: 0 }
});


const Player = mongoose.model('Player', PlayerSchema)
module.exports = Player
