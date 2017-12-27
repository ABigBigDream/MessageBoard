const mongoose = require('mongoose');

let message = new mongoose.Schema({
    author: String,
    title: String,
    content: String
});

module.exports = mongoose.model('Blog', message);