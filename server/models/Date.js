const { Schema } = require('mongoose');

const dateSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true,
    },
    categories: [
        {
            type: String,
            required: true,
        },
    ],
    image: {
        // path: String,
    },
    externalLink: {
        // path: String,
    },
});

module.exports = dateSchema;