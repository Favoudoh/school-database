const {Schema} = require ("mongoose")
const mongoose = require ("mongoose")

const UserSchema = new Schema ({
    _id : mongoose.Schema.Types.ObjectId,
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model("user",UserSchema,"users")
