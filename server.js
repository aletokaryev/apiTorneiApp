const express = require('express')
const { default: mongoose } = require('mongoose')
const APP = express()
const PORT = 3000;


const cors = require('cors')

APP.use(cors())

APP.use(express.json())
APP.use('/api', require('./routes/players'))
APP.use('/api', require('./routes/game'))
APP.use('/api', require('./routes/tournament'))

dbUrl = process.env.MONGODBURI

mongoose.connect(dbUrl)
.then(APP.listen(PORT, () => console.log(`Connected to database and listening on localhost:${PORT}!`)))
.catch(err => console.error('Error while connecting.', err))

