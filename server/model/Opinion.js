const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const opinionSchema = new Schema({
    title: String,
    comment: String,
    user: String,
    createdAt: Date,
});

const Opinion = model('Opinion', opinionSchema);


module.exports = Opinion;