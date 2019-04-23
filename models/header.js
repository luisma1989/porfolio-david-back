'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HeaderSchema = Schema({
  name: String,
  apellidos: String,
})

module.exports = mongoose.model('Header', HeaderSchema)
