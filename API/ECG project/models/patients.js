const mongoose = require('mongoose')

const patientsSchema = new mongoose.Schema({

    nic:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    dateofbirth:{
        type: Date,
        required: true
    },
    gender:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('patients',patientsSchema)