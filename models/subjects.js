const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const SubjectSchema= new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    subject:{
        type:String,
        required:true
    },

teacher:{
    type:String,
    required:true
    },
venue:{
    type:String,
    required:false
},
creditUnit:{
    type:Number,
    required:false
    },
});

module.exports=mongoose.model("Subject",SubjectSchema,"subjects")