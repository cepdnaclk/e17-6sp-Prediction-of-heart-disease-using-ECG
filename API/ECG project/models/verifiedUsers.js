const mongoose = require('mongoose')

const verifiedUsersSchema = new mongoose.Schema({

    doctorid:{
        type: String,
        unique: true,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true

    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,

    },
    helperPoints:{
        type: Number,
        required: true,
        default: 0
    },

})

module.exports = mongoose.model('verifiedUsers',verifiedUsersSchema)