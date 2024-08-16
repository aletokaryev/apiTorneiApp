const express = require('express')
require('dotenv').config()
const { default: mongoose } = require('mongoose')
const APP = express()
const PORT = 3000;


const cors = require('cors')

APP.use(cors())

APP.use(express.json())
APP.use('/api', require('./routes/players'))
APP.use('/api', require('./routes/game'))
APP.use('/api', require('./routes/tournament'))

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
.then(APP.listen(PORT, '0.0.0.0', () => console.log(`Connected to database and listening on port: ${PORT}!`)))
.catch(err => console.error('Error while connecting.', err))


