import mongoose from "mongoose";

const folders = mongoose.Schema({
    useremail:String,
    foldername:String
})

export default mongoose.model("folders",folders)