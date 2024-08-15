const express = require('express');
const router = express.Router();

const gamesController = require("../controllers/game")

router.get('/games', gamesController.getAllGames)
router.get('/games/:id', gamesController.getGamesById)
router.post('/games', gamesController.addGame)
router.put('/games/:id', gamesController.editGame)
router.delete('/games/:id', gamesController.deleteGame)

module.exports = router
