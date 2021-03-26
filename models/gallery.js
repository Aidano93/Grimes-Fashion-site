// load mongoose
const mongoose = require('mongoose')

// define our Schema
const gallerySchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String,
    width: Number,
    height: Number,
    pathURL: String,
    credit: String,
    creditURL: String,
    imageSrc: String
  }
)

// compile and export Schema
module.exports = mongoose.model('Gallerie', gallerySchema)