const express = require('express')
const app = express()
const cors = require('cors')

const about = require('./about.json')
const projects = require('./projects.json')

app.use(cors())

app.get('/projects', (req, res) => {
    res.json(projects)
})

app.get('/about', (req, res) => {
    res.json(about)
})

require('dotenv')
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('Listening on PORT ' + PORT))