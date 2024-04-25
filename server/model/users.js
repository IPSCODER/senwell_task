import mongoose from "mongoose";

const users = mongoose.Schema({
    username:String,
    useremail:String,
    password:String
})

export default mongoose.model("users",users)