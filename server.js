//console.log("Doing well in Software Development");
const express = require('express');
const app = express();

const dotenv = require("dotenv").config

const port = process.env.PORT || 5001;

app.get('/api/contactlist', (req,res) => {
    res.send("Get all contacts")
});

/*
app.get('/api/contactlist', (req, res) => {
    res.status(200).json({ message: "Here we are, coding and developing systems" });
});
*/

app.use('/api/contacts', require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});