const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const Subject = require("../models/subjects");


route.get("/subtable", async (req, res) => {
    const subjectsss = await Subject.find();
    res.render("subtable",{subjectsss})
});

route.get("/sub", async (req, res) => {
    res.render('sub')
});

route.post("/subject/update"), async(req,res)=>{
    const{id, subject, teacher, venue, creditUnit} = req.body;
    const newSubject = await Subject.findByIdAndUpdate(id,{subject, teacher, venue, creditUnit})
    res.redirect("/subjects/subtable")
}

route.post("/sub", async (req, res) => {
    const {subject,teacher,venue,creditUnit}=req.body;
    const subjectss= Subject({
        _id:mongoose.Types.ObjectId(),
        subject:subject,
        teacher:teacher,
        venue:venue,
        creditUnit:creditUnit
    });
    const result = await subjectss.save();
    res.redirect("/subjects/subtable");
});

route.get("/subject/:id", async (req, res)=> {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    res.redirect("/subjects/subtable");
});

route.get("/subject/:id/edit", async (req, res)=> {
    const subject = await Subject.findById(req.params.id);
    res.render("subedit",{subject});
});

route.post("/update",async(req,res)=>{
    const subject = await Subject.findOneAndUpdate(req.params.id, req.body);
    res.redirect("/subjects/subtable")
});


module.exports = route;