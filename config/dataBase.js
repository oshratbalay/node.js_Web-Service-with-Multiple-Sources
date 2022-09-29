const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/personsDB",()=>console.log("conect mongoose"))