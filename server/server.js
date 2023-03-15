const mongoose = require('mongoose');
const User = require("./model/User");
mongoose.connect("mongodb+srv://IgnacyG:FindandGo@cluster0.uqvqvaj.mongodb.net/Find&Go");
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.listen(3001, () => console.log('Server started on port 3001'));

app.post('/users/create', (req, res) => {
    console.log(req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password
    const email = req.body.email;
    const createdAt = Date.now();

    const user = new User({
        firstName,
        lastName,
        password,
        email,
        createdAt,
    });
    user.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ success: false }));
});