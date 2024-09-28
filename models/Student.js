import mongoose,{Schema}from "mongoose";
const studentSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phoneno:{type:Number,required:true},
    location:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
})
const Student = mongoose.model("student",studentSchema)
export default Student