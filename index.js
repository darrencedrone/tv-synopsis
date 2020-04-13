const express = require('express')
const showdata = require('./showdata')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/season/:number', (request, response) => {
  const { number } = request.params
  const season = showdata.seasons.find((season) => season.number === parseInt(number))

  return response.render('season', { season })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1975, () => {
  console.log('Listening on 1975...') // eslint-disable-line no-console
})