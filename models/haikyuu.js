const mongoose = require('mongoose')

let schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

let haikyuuSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 99
    },
    position: String,
    image: String,
    school : [schoolSchema]
})



module.exports = mongoose.model('Haikyuu', haikyuuSchema)