const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const api = require('./routes')
const config = require('./config')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
  credentials: true,
}))

app.use('images', express.static('images'))
app.use('/api', api)

mongoose.connect(
  config.db,
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexión a la base de datos establecida...')

    app.listen(config.port, () => {
      console.log(`API REST corriendo en http://localhost:${config.port}`)
    })
  }
)
