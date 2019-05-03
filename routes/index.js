const express = require('express')
const homeController = require('../controllers/home')
const api = express.Router()

api.get('/header', homeController.getHeader)
api.post('/header', homeController.setHeader)
api.get('/subheader', homeController.getSubheader)
api.post('/subheader', homeController.setSubheader)
api.get('/countries', homeController.getCountries)
api.post('/countries', homeController.setCountries)
api.get('/experience', homeController.getExperience)
api.post('/experience', homeController.setExperience)

module.exports = api
