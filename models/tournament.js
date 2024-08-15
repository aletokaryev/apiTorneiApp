const mongoose = require('mongoose');

const TournamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  status: { type: String, enum: ['ongoing', 'completed'], default: 'ongoing' },
  createdAt: { type: Date, default: Date.now },
});


const Tournament = mongoose.model('Tournament', TournamentSchema)
module.exports = Tournament
