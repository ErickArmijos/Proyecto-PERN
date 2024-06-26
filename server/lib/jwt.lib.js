import "dotenv/config"
import jwt from "jsonwebtoken"

const tokenGenerator = (payload) =>{
   return new Promise((resolve,reject)=>{
        jwt.sign(payload,process.env.SECRET_KEY,{
            expiresIn:"1d",
        },(error,token)=>{
            if(error) reject(error)
                resolve(token)
        })
   })
}

export default tokenGenerator;



