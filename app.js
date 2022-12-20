const express = require("express");
const mongoose = require("mongoose");
const app = express();

// middleware
app.use(express.json());

// port 
port = process.env.PORT || 3000;


// DataBase Connections
require("./database/connection")


// Routes

app.use(require("./api/productAPI"));
app.use(require("./api/coupon"));



app.get("/", (req, res) => {
    res.send("this is a coupon web system");
})




app.listen(port, (e) => {
    e ? console.log(e) :
        console.log("backend is runnning")
})