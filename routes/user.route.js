const { Router } = require("express");
const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const User = require("../models/users");

route.get("/usertable", async(req, res) => {
    const users = await User.find();
    res.render("usertable",{users})
});

route.get("/user",(req,res)=>{
    res.render("user")
});

route.post("/user",async(req,res)=>{
    const{firstname,lastname,email,password,age}=req.body;

    const user=User({
        _id:mongoose.Types.ObjectId(),
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password,
        age:age
    });
    const result = await user.save()
    res.redirect("/users/usertable");
});

route.get("/user/:id", async (req, res)=> {
    const user = await User.findByIdAndDelete(req.params.id);
    res.redirect("/users/usertable");
});

module.exports = route;