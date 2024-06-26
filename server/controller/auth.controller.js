import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
import tokenGenerator from "../lib/jwt.lib.js";

const login = async (req,res) =>{
    try{
        const {email_user,password_user} = req.body;
        const userFound = await User.findOne({email_user});
        if(!userFound) return res.status(400).json({message:"User not found"})
        const matchPass = await bcryptjs.compare(password_user,userFound.password_user)
        if(!matchPass) return res.status(400).json({message:"Invalid credentials"})
        
        const token = await tokenGenerator({uuid:userFound.uuid_user})
        res.cookie("token",token);
        res.json({message:"User authenticated"})

    }catch(e){
        console.error("Error al registrar usuario: ",e)
        res.status(500).json({error:"Error al registrar usuario"})       
    } 
}

const register = async (req, res) => {
    try{
        const {username_user,email_user,password_user} = req.body;
        const passwordCrypt = await bcryptjs.hash(password_user,10);
        

        const newUser = new User({
            username_user,email_user,password_user:passwordCrypt
        })
        await newUser.save()
        const token = await tokenGenerator({uuid:newUser.uuid_user})
        res.cookie("token",token)
        res.json(newUser)

    }catch(e){
        console.error("Error al registrar usuario: ",e)
        res.status(500).json({error:"Error al registrar usuario"})
    }
};

const logout = (req,res)=>{
    res.cookie("token","",{expires: new Date(0)})
    return res.sendStatus(200)
}

const profile = async (req,res) =>{
    const userFound = await User.findByPk(req.user.uuid);
    if(userFound){
        res.json(userFound)
    }else{
        res.status(400).json({message:"User not found"})
    }
    
}


const authController = {login,register,logout,profile}

export default authController;