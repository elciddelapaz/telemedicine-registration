const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://telemed:telemedicine12345@cluster0.pugmkb4.mongodb.net/Telemedicine', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })
    console.log("im in boss");

const db = mongoose.connection

module.exports = db