import mongoose from "mongoose";

const images = mongoose.Schema({
    useremail:String,
    foldername:String,
    path:String
})

export default mongoose.model("images",images)