var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mvp', () => {
  console.log('connected to mongodb')
})

let penSchema = mongoose.Schema({
  manufacturer: String,
  name: String,
  image: String,
  ink: [],
  notebook: []
})

let inkSchema = mongoose.Schema({
  manufacturer: String,
  name: String,
  image: String,
  pen: []
})

let notebookSchema = mongoose.Schema({
  manufacturer: String,
  name: String,
  image: String,
  pen: []
})

let Pen = mongoose.model('Pen', penSchema);
let Ink = mongoose.model('Ink', inkSchema);
let Notebook = mongoose.model('Notebook', notebookSchema);

let save = (data, cb) => {
  console.log('inside save', data)
  if (data.item === 'pen') {
    var newPen = new Pen ({
      manufacturer: data.manufacturer,
      name: data.name,
      image: data.image
    })
    newPen.save();
  } if (data.item === 'ink') {
    var newInk = new Ink ({
      manufacturer: data.manufacturer,
      name: data.name,
      image: data.image
    })
  } if (data.item === 'notebook') {
    var newNotebook = new Notebook ({
      manufacturer: data.manufacturer,
      name: data.name,
      image: data.image
    })
  }

}

async function query(cb) {
  try {
    const results = await Pen.find({})
    console.log(results)
    cb(null, results)
  } catch (e) {
    console.log(e.message)
    cb(e.message)
  }
}

module.exports.save = save;
module.exports.query = query;