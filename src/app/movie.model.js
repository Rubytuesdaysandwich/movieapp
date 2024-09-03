const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    releaseDate: { type: Date },
    genres: [{ type: String }],
    directors: [{ type: String }],
    writers: [{ type: String }],
    stars: [{ type: String }],
    rating: { type: Number, min: 1, max: 10 },
    poster: { type: String },
    trailer: { type: String },
    reviews: [{
        rating: { type: Number, min: 1, max: 10 },
        review: { type: String },
        createdAt: { type: Date, default: Date.now },
    }],
    comments: [{
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
    }],
}, {
    timestamps: true,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

// This schema includes:


// - Movie title and description
// - Release date
// - Genres, directors, writers, and stars
// - Rating (1-10)
// - Poster and trailer URLs
// - Reviews (with rating and text)
// - Comments (with text)
export default movieSchema;