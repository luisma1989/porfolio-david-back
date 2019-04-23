const express = require('express')
const homeController = require('../controllers/home')
const api = express.Router()

api.get('/header', homeController.getHeader)
api.post('/header', homeController.setHeader)
api.get('/subheader', homeController.getSubheader)
api.get('/countries', homeController.getCountries)
api.get('/experience', homeController.getExperience)

module.exports = api
