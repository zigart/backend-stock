let mongoose = require('mongoose');

let cardSchema = mongoose.Schema({
    title: String,
    description: String,
    counter: Number
});

module.exports = mongoose.model('card', cardSchema);