require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const url = process.env.URL
const PORT = process.env.PORT || 8080
const Routes = require('./routes/router')
app.use(cors());
app.use(express.json())
app.use(express.static("public"));

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) console.log("Mongoose Connected Successfully");
    else {
        console.log(err);
    }
});
app.use('/', Routes);
app.listen(PORT, err => {
    if (!err) {
        console.log("App listening to the port " + PORT);
    }
    else {
        console.log(`${err}`)
    }
})