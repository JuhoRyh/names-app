const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3001
const fs = require('fs')

const names = JSON.parse(fs.readFileSync('names.json', 'utf8'))

app.use(cors())

//Sends a list of names by popularity
app.get('/api/names/popular', (req, res) => {
  const sortedNames = names.names.concat()
  sortedNames.sort((a, b) => b.amount - a.amount)
  res.json(sortedNames)
})

//Sends a list of names in an alphabetical order
app.get('/api/names/alphabetical', (req, res) => {
  const sortedNames = names.names.concat()
  sortedNames.sort((a, b) => b.name > a.name ? -1 : 1)
  res.json(sortedNames)
})

//Sends the total amount of the individuals with the top 10 names for females and males
app.get('/api/names/total', (req, res) => {
  var total = 0
  names.names.map(name => {
    total = total + name.amount
    return total
  })
  const totalObject = { total: total }
  res.json(totalObject)
})

//Sends an object containing the name and amount
app.get('/api/names/:name', (req, res) => {
  const searchname = req.params.name
  var foundname = names.names.filter(nameObject => nameObject.name.toUpperCase() === searchname.toUpperCase())
  res.json(foundname)
})

app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`)
})