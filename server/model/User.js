const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    createdAt: Date,
    favorites: Array,
});

const User = model('User', userSchema);


module.exports = User;