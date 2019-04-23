'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubheaderSchema = Schema({
  title: String,
  text: String,
})

module.exports = mongoose.model('Subheader', SubheaderSchema)
