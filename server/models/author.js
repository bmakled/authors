const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName:{
        type: String,
        minLength: [3, 'Author name must be more than 3 characters'],
    },

},{timestamps:true})

const Author = mongoose.model('Author',AuthorSchema);

module.exports = Author;
