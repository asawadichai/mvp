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

async function save(data, cb) {
  if (data.item === 'pen') {
    var newPen = new Pen ({
      manufacturer: data.manufacturer,
      name: data.name,
      image: data.image
    })
    await newPen.save();
  } if (data.item === 'ink') {
    var newInk = new Ink ({
      manufacturer: data.manufacturer,
      name: data.name,
      image: data.image
    })
    await newInk.save();
  } if (data.item === 'notebook') {
    var newNotebook = new Notebook ({
      manufacturer: data.manufacturer,
      name: data.name,
      image: data.image
    })
    await newNotebook.save();
  }
}

async function query(cb) {
  try {
    const penResult = await Pen.find({});
    const inkResult = await Ink.find({});
    const notebookResult = await Notebook.find({});
    var data = [penResult, inkResult, notebookResult];
    console.log(data);
    cb(null, data);
  } catch (e) {
    console.log(e.message)
    cb(e.message)
  }
}

module.exports.save = save;
module.exports.query = query;