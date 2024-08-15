const express = require('express');
const router = express.Router();

const torneiController = require("../controllers/tournament")

router.get('/tornei', torneiController.getAllTournaments)
router.get('/tornei/:id', torneiController.getTournamentById)
router.post('/tornei', torneiController.createTournament)
router.put('/tornei/:id', torneiController.editTournament)
router.delete('/tornei/:id', torneiController.deleteTournament)

module.exports = router
