const mongoose = require('mongoose')

let schoolSchema = new mongoose.Schema({
    schoolName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('School', schoolSchema)