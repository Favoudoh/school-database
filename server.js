require("dotenv").config();
const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose")
const config = require("./config");
const Student = require("./models/students")
const Teacher = require("./models/teachers")
const Subject = require("./models/subjects")
const User = require("./models/users")
const studentRoute = require("./routes/students.route")
const subjectRoute = require("./routes/subjects.route")
const teacherRoute = require("./routes/teachers.route")
const userRoute = require("./routes/user.route")

// const { Router } = require("express");

const app = express()
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("styles"));
app.use("/public",express.static("public"));
// app.use("public",express.static(__dirname+"public"));

app.use("/students",studentRoute)
app.use("/subjects",subjectRoute)
app.use("/teachers",teacherRoute)
app.use("/users",userRoute);




app.get("/home", (req, res) => {
    res.render("home")
});

app.get("/subedit", (req, res) => {
    res.render("subedit")
});






mongoose.connect(config.mongo_url, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) {
        console.log("connection to that db failed");
    } else {
        app.listen(config.port, () => console.log(`server running on ${config.port}`))
    }

});

app.listen(7000)