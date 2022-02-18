const { Schema, model } = require('mongoose');
const reviewSchema = require('./Review')

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
        path: String
    },
    externalLink: {
        // path: String,
    },
    reviews: [reviewSchema]
},
    {
        toJSON: {
            virtuals: true,
        },
    }
);

dateSchema.virtual('reviewCount').get(function () {
    return this.reviews.length;
});

dateSchema.virtual('rating').get(function () {
    const count = this.reviews.length
    const sum = this.reviews.reduce((total, review) => total + review.rating, 0)

    return sum / count
});

const Date = model("Date", dateSchema)
module.exports = Date;