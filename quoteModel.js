const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const nameSchema = new Schema(
{
    
    firstName: String,
    lastName: String,
    cpf: String,
    dividaUm: Number,
    dividaDois: Number,
    dividaTres: Number,
    total: { type: String, default: 'total'}
},
{
    timestamps: true
})

const User = mongoose.model('User', nameSchema)
module.exports = User