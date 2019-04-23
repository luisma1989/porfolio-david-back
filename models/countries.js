'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CountriesSchema = Schema({
  es: {
    title: String,
    text: String,
  },
  ru: {
    title: String,
    text: String,
  },
})

module.exports = mongoose.model('Countries', CountriesSchema)
