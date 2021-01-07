const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const Teacher = require("../models/teachers");

route.get("/teachtable", async(req, res) => {
    const teachers = await Teacher.find();
    res.render("teachtable",{teachers})
});

route.get("/teach", (req, res) => {
    res.render("teach")
});

route.post("/teach",async (req,res)=>{
    const{name,address,age,staffid}=req.body;
    
    const teacher=Teacher({
        _id:mongoose.Types.ObjectId(),
        name:name,
        address:address,
        age:age,
        staffid:staffid
    });
    const result = await teacher.save()
    res.redirect("/teachers/teachtable");
});

route.get("/teacher/:id", async (req, res)=> {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    res.redirect("/teachers/teachtable");
});

route.get("/teacher/:id/edit", async (req, res)=> {
    const teacher = await Teacher.findById(req.params.id);
    res.render("teachedit",{teacher});
});

route.post("/update",async(req,res)=>{
    const teacher = await Teacher.findOneAndUpdate(req.params.id, req.body);
    res.redirect("/teachers/teachtable")
});


module.exports = route;

