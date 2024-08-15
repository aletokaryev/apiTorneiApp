const express = require('express');
const router = express.Router();

const playerController = require("../controllers/player")

router.get('/players', playerController.getPlayers)
router.get('/players/:id', playerController.getPlayerById)
router.post('/players', playerController.addPlayer)
router.put('/players/:id', playerController.editPlayer)
router.delete('/players/:id', playerController.deletePlayer)

module.exports = router
