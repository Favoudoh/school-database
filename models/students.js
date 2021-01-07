const {Schema } = require("mongoose");
const mongoose = require("mongoose");

const StudentSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },

    address : {
        type:String,
        required:false
    },

    age : {
        type: Number,
        required:true
    }
});

module.exports=mongoose.model("Student",StudentSchema,"students")