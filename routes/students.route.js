const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const Student = require("../models/students");

route.get("/stutable", async (req, res) => {
    const students = await Student.find();
    res.render("stutable", {students})
});

route.get("/stu", (req, res) => {
    res.render("stu")
});

route.post("/stu", async (req, res) => {
    const {name, address, age } = req.body;

    const student = Student({
        _id: mongoose.Types.ObjectId(),
        name: name,
         address:address, 
         age: age
    });

    const result = await student.save();
     res.redirect("/students/stutable");
});

route.get("/student/:id", async (req, res)=> {
    const student = await Student.findByIdAndDelete(req.params.id);
    res.redirect("/students/stutable");
});

route.get("/student/:id/edit", async (req, res)=> {
    const student = await Student.findById(req.params.id);
    res.render("stuedit",{student});
});

route.post("/update",async(req,res)=>{
    const student = await Student.findOneAndUpdate(req.params.id, req.body);
    res.redirect("/students/stutable")
});



module.exports = route;