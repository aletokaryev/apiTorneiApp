const Tournament = require('../models/Tournament');

const createTournament = async (req, res) => {
  try {
    const tournament = new Tournament(req.body);
    await tournament.save();
    res.status(201).json(tournament);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

const getAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find().populate('games').populate('players');
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const getTournamentById = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id).populate('games').populate('players');
    if (!tournament) return res.status(404).json({ error: 'Tournament not found' });
    res.json(tournament);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const editTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tournament) return res.status(404).json({ error: 'Tournament not found' });
    res.json(tournament);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const deleteTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findByIdAndDelete(req.params.id);
    if (!tournament) return res.status(404).json({ error: 'Tournament not found' });
    res.json({ message: 'Tournament deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createTournament, getAllTournaments, getTournamentById, editTournament, deleteTournament }
