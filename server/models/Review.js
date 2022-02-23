const { Schema } = require('mongoose');

const reviewSchema = new Schema({
    rating: {
        type: Number
    },
    username: {
        type: String
    }
});

module.exports = reviewSchema;