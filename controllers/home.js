const Header = require('../models/header')
const Subheader = require('../models/subheader')
const Countries = require('../models/countries')
const Experience = require('../models/experience')

function getHeader(req, res) {
  Header.find({}, (err, header) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!header) return res.status(404).send({message: 'No existen productos'})

    res.status(200).send({ header })
  })
}

function setHeader(req, res) {
  const headerData = new Header(req.query);
  headerData.save()
    .then(() => {
      res.status(200).send({ message: 'item saved to database' })
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
}


function getSubheader(req, res) {
  Subheader.find({}, (err, subheader) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!subheader) return res.status(404).send({message: 'No existen productos'})

    res.send(200, { subheader })
  })
}

function getCountries(req, res) {
  Countries.find({}, (err, countries) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!countries) return res.status(404).send({message: 'No existen productos'})

    res.send(200, { countries })
  })
}

function getExperience(req, res) {
  Experience.find({}, (err, experience) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!experience) return res.status(404).send({message: 'No existen productos'})

    res.send(200, { experience })
  })
}

module.exports = {
  getHeader,
  setHeader,
  getSubheader,
  getCountries,
  getExperience,
}
