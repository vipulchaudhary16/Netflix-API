const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NetflixItemSchema = new Schema({
    show_id: {
        type: String,
        unique: true,
    },
    type: {
        type: String,
    },
    title: {
        type: String,
    },
    director: {
        type: String,
    },
    cast: {
        type: String,
    },
    country: {
        type: String,
    },
    date_added: {
        type: Date,
    },
    release_year: {
        type: String,
    },
    rating: {
        type: String,
    },
    duration: {
        type: String,
    },
    listed_in: {
        type: String,
    },
    description: {
        type: String,
    },
});

module.exports = NetflixItem = mongoose.model('netflix', NetflixItemSchema);