import users from "../model/users.js";

export const signIn = async (req,res) =>{
    const {body} = req.body;
    try{
       
        const oldUser = await users.findOne({useremail:body.email});
        if (!oldUser) {
            return res.send("Register First")
        }else if (oldUser.password == body.password) {
            res.status(201).json("available")
        } else {
            res.status(201).json("wrong password")
        }
   }catch(err){
       res.status(500).json({message:"Something went wrong"})
       console.log(err);
   }
}

export const signUp = async (req,res) => {
    const {body} = req.body;

    try{
        const oldUser = await users.findOne({useremail:body.email});
        if (!oldUser) {
            await users.create({
               username:body.name,
               useremail:body.email,
               password:body.password,
           });
           res.status(201).json("success")
        }else{
            return res.send("User Already Registered")
        }

    }catch(err){
        res.status(500).json({message:"Something went wrong"})
        console.log(err);
    }

}