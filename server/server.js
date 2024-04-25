import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import  userRouter from "./routes/users.js"
import folderRouter from "./routes/folders.js"
import multer from "multer";
import path from "path"
import images from "./model/images.js";


dotenv.config();

const PORT = process.env.PORT || 9000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public"))

// routes start
app.use("/users",userRouter)
app.use("/folders",folderRouter)
// routes end

const storage = multer.diskStorage({
  destination:(req,res,cb) =>{
    cb(null,"public/images")
  },
  filename:(req,file,cb) => {
    cb(null,file.fieldname + "_"+ Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage:storage
})

app.put("/upload/:id/:folder",upload.single("file"), async (req,res)=>{
  await images.create({useremail:req.params.id,foldername:req.params.folder,path:req.file.filename,})
  .then(result => res.json(result))
  .catch(err => console.log(err))
})

app.post("/getImages",async (req,res) =>{
  const {useremail,foldername} = req.body;

  await images.find({useremail:useremail,foldername:foldername})
  .then((result) => res.json(result))
  .catch((err) => console.log(err))
})









mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running");
    })
}).catch((err)=>{
    console.log(err);
})
