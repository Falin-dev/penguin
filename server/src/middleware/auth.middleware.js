import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/env.js"

const authenticateUser = async (req,res,next)=>{
    try{
        const {authorization} = req.headers
        let jwtToken = authorization
        let JWT = ''
        if(jwtToken){
            JWT = jwtToken.split(" ")[1];
        }
        const payload = jwt.verify(JWT,JWT_SECRET)
        req.user = payload
        next();
    }
    catch(error){
        next(error)
    }
}

export default authenticateUser