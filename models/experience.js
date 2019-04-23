'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExperienceSchema = Schema({
  title: String,
  subtitle: String,
  jobs: [{
    title: String,
    subtitle: String,
    text: String,
    time: String,
    class: String,
    image: String,
  }],
})

module.exports = mongoose.model('Experience', ExperienceSchema)
