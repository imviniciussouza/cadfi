const mongoose = require('mongoose')
const url = 'mongodb+srv://vinipodolsk:yOd1Nk4SL2AQbh8w@todolist.4nsf7x2.mongodb.net/test'


const connection = mongoose.connect(url)
.then(()=> console.log('conected'))
.catch((err)=> console.log(err));

module.exports = connection