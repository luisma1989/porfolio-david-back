const Header = require('../models/header')
const Subheader = require('../models/subheader')
const Countries = require('../models/countries')
const Experience = require('../models/experience')
const Messages = require('../utils/messages')

const getModel = (Component, res) => {
  Component.find({}, (error, component) => {
    if (error) {
      return Messages.errorInSave(res, error)
    }
    if (!component) {
      return res.status(404).send({
        message: 'No existen productos'
      })
    }
    console.log(component);

    return res.status(200).send(component[0])
  })
}

const getHeader = (req, res) => getModel(Header, res)
const getSubheader = (req, res) => getModel(Subheader, res)
const getCountries = (req, res) => getModel(Countries, res)
const getExperience = (req, res) => getModel(Experience, res)

const setHeader = (req, res) => {
  const headerData = new Header(req.query)
  headerData.save()
    .then(() => Messages.correctSave(res))
    .catch((error) => Messages.unableToSave(res, error))
}

const setSubheader = (req, res) => {
  const subheaderData = new Subheader(req.query)
  subheaderData.save()
    .then(() => Messages.correctSave(res))
    .catch((error) => Messages.unableToSave(res, error))
}
const setCountries = () => {
  const countriesData = new Countries(req.query)

  countriesData.save()
    .then(() => Messages.correctSave(res))
    .catch(() => Messages.unableToSave(res, error))
}
const setExperience = () => {
  const experienceData = new Experience(req.query)

  experienceData.save()
    .then(() => Messages.correctSave(res))
    .catch(() => Messages.unableToSave(res, error))
}

module.exports = {
  getHeader,
  getSubheader,
  getCountries,
  getExperience,
  setHeader,
  setSubheader,
  setCountries,
  setExperience,
}
