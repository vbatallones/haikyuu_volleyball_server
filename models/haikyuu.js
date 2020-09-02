const mongoose = require('mongoose')

let haikyuuSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 99
    },
    position: String,
    school: mongoose.Schema.Types.ObjectId,
    ref: 'School'
})

module.exports = mongoose.model('Haikyuu', haikyuuSchema)