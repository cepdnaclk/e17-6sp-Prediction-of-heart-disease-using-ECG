require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open',() => console.log('Connected to Database'))

app.use(express.json())



//routes

const patientsRouter = require('./routes/patients')
app.use('/patients',patientsRouter)

const verifiedUsersRouter = require('./routes/verifiedUsers')
app.use('/verifiedUsers',verifiedUsersRouter)

const authRouter = require('./routes/auth')
app.use('/auth',authRouter)


app.listen(3000, () => console.log('Server started'))
