import users from "../model/users.js"
import folders from "../model/folders.js";
import images from "../model/images.js";
import fs from "fs"

export const createFolder = async (req,res) =>{
    const {body} = req.body;
    try{
        const oldUser = await users.find({useremail:body.email});
        if (!oldUser) {
            return res.send("Register First")
        }else{
            await folders.create({
                useremail:body.email,
                foldername:body.foldername
            });
            res.status(201).json("success")
        }
    }catch(err){
        console.log(err);
    }
}

export const allFolders = async (req,res) =>{
    console.log('called');
    const {body} = req.body;
    try{
        const oldUser = await users.find({useremail:body.email});
        if (!oldUser) {
            return res.send("Register First")
        }else{
            const folderdata = await folders.find({
                useremail:body.email,
            });
            res.status(201).json(folderdata)
        }
    }catch(err){
        console.log(err);
    }
}

export const deleteFolder = async (req,res) =>{
    const {useremail,foldername} = req.body;
    console.log(useremail,foldername);
    try{
        const oldUser = await users.find({useremail:useremail});
        if (!oldUser) {
            return res.send("Register First")
        }else{
            const folderimages = await images.find({
                useremail:useremail,
                foldername:foldername
            });
            console.log(folderimages);
            const deleteFolder = await folders.deleteOne({
                foldername:foldername
            })
            const deleteImages = await images.deleteMany({
                useremail:useremail,
                foldername:foldername
            })

            for(let a of folderimages){
                fs.unlink(`public/images/${a.path}`, function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
            }
            res.status(201).json({message:true})
        } 
    }catch(err){
        console.log(err);
    }
}
