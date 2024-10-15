import mongoose, { Schema } from "mongoose";
const imageSchema = new Schema({
    image:{
        fileName:String,
        fileType:String,
        fileContent:String,
    },
    name:{type:String, required :true},
    category:{type:String,required:true},
    location:{type:String,required:true}
});
const Image = mongoose.model("image",imageSchema);
export default Image;