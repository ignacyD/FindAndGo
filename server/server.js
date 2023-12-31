
const mongoose = require('mongoose');
const User = require("./model/User");
const Opinion = require("./model/Opinion")
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
    const favourites = [];

    const user = new User({
        firstName,
        lastName,
        password,
        email,
        createdAt,
        favourites
    });
    user.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ success: false }));
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email, password: password})
        .then(user => res.json(user))
})

app.patch("/favourites", (req, res) => {
    (User.findOneAndUpdate({ _id: req.body.userData._id },
        { $push: { favourites: req.body.attraction } }))
        .then(user => res.json(user))
})

app.delete("/favourites", (req, res) => {
    console.log(req.body)
    User.updateOne({ _id: req.body.userID }, 
        {$pull: { favourites: { xid: req.body.attractionID}}})
        .then(user => res.json(user))
})

app.get('/opinions', async (req, res) => {
    const result = await Opinion.find();
    res.json(result)
})

app.post('/opinions', (req, res) => {
    const opinion = new Opinion({
        ...req.body,
        createdAt: Date.now()
    })
    opinion.save()
        .then(opinion => res.json(opinion))
        .catch(error => console.error(error))
})