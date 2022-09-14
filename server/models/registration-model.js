const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Registration = new Schema({
    timestamp: {
        type: String,
        required: [true],
    },
    patientType: {
        type: String,
        required: [true],
        enum: ['old', 'new'],
    },
    firstName: {
        type: String,
        required: [true]
    },

    middleInitial: {
        type: String,
        maxLength: 2,
    },

    lastName: {
        type: String,
        required: [true]
    },
    birthday:{
        type: String,
        required: [true]
    },
    email:{
        type: String,
        required: [true]
    },
    phone:{
        type: String,
        required: [true]
    },
    reasons:{
        type: String,
        required: [true]
    },
    physician:{
        type: String,
        required: [true]
    },
    confirmation: {
        type: String,
        required: [true]
    }
})

module.exports = mongoose.model('Registration', Registration)
