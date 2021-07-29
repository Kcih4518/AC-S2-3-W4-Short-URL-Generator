// Require node_modules
const mongoose = require('mongoose')

// Define URLs schema
const Schema = mongoose.Schema
const urlsSchema = new Schema({
  originURL: {
    type: String,
    trim: true,
    required: true
  },
  shortURL: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('URL', urlsSchema)
