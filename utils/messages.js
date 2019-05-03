const errorInSave = (res, error) => {
  const message = `Error al realizar la petición: ${error}`
  console.log(message)

  return res.status(500).send({ message })
}

const correctSave = (res) =>
  res.status(200).send('Save correctly!')


const unableToSave = (res, error) =>
  res.status(400).send(`unable to save to database: ${error}`)

module.exports = {
  errorInSave,
  correctSave,
  unableToSave,
}
