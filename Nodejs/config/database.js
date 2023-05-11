require('dotenv').config();
const mongoose = require('mongoose');

const connection = mongoose
	.connect('mongodb://127.0.0.1:27017/Poshshop')
	.then(() => console.log('Connected to MongoDB'))
	.catch((error) => console.error(error));

module.exports = connection;
