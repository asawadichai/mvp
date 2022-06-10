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

app.get('/', (req, res) => {
  db.query().then((results) => {
    console.log('/', results);
    res.send(results);
  });
})

app.post('/addItem', (req, res) => {
  var data = req.body;
  db.save(data, (err, result) => {

  })

  res.sendStatus(201).end();
})