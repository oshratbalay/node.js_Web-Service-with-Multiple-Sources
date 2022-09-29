const mongoose = require('mongoose')

const personSchema = new mongoose.Schema(
    {
        number: Number,
        address:{city:String,street:String}
    }
)

const model = mongoose.model('persons',personSchema)

module.exports = model