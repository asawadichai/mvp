const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'))
app.use(bodyParser.urlencoded({extended:true}))

const db = require('../database/index.js')

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

app.get('/collection', (req, res) => {
  db.query((err, data) => {
    if (err) {
      console.log('error loading')
      res.sendStatus(404);
    } else {
      console.log(data)
      res.status(200).json(data)
    }
  })
})

app.post('/addItem', (req, res) => {
  var data = req.body;
  db.save(data)
  .then(
    db.query((err, data) => {
      if (err) {
        console.log('error loading')
        res.sendStatus(404);
      } else {
        console.log(data)
        res.status(200).json(data)
      }
    })
  )

  //res.sendStatus(201).end();
})