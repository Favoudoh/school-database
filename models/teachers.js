const {Schema} = require("mongoose");
const mongoose = require("mongoose")

const TeacherSchema = new Schema ({
    _id : mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
       },
    address : {
        type: String,
        required:false
    },
    age:{
        type:Number,
        required:true
    },
    staffid:{
        type:Number,
        require:true
    }
});

module.exports=mongoose.model("Teacher",TeacherSchema,"teachers")