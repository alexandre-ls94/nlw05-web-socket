import express from 'express'

import './database'

const app = express()

app.get('/', (req, res) => {
  return res.json({
    message: 'get route',
  })
})

app.post('/', (req, res) => {
  return res.json({
    message: 'post route',
  })
})

const port = 3000
app.listen(port, () => console.log(`server running in ${port}`))
