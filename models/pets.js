// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var PetSchema = new mongoose.Schema({
    name: { type: String, required: true },
	category: { type: String, required: true },
	breed: String,
	age: Number,
	gender: String,
	owner: { type: String, required: true },
	questions: [ String ],
	favoritedBy: [ String ],
	imageURLs: [ String ],
	size: {
        type: String,
        enum: [ 'small', 'medium', 'large' ]
    },
	energyLevel: {
        type: String,
        enum: [ 'low', 'medium', 'high' ]
    },
	description: String,
	price: { type: Number, default: 0 },
	dateCreated: { type: Date, default: Date.now }
});

// Export the Mongoose model
module.exports = mongoose.model('Pet', PetSchema);