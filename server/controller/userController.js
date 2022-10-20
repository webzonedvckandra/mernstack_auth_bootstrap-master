import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import userModel from "../Model/usermodel.js"

const secret = "test";

export const singup= async(req,res)=>{
    const { email, password, firstName, lastName } = req.body;
    try{
        const oldUser=await userModel.findOne({email});
        if(oldUser){
            return res.status(400).json({'message':"user already exist"})
        }
        const hashPassword=await bcrypt.hash(password,10);
        const result=await userModel.create({
            email,
            password:hashPassword,
            name:`${firstName} ${lastName}`,
        });
        const token=jwt.sign({email:result.email,id:result._id},secret,{expiresIn:"1h"})
         res.status(201).json({result,token})
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      }
}

//for login

export const sigin=async(req,res)=>{
    const {email,password}=req.body;
    try{
     const oldUser=await userModel.findOne({email});
     if(!oldUser){
        res.status(400).json({message:"user not exist...."});
     }
    const isPassword=await bcrypt.compare(password,oldUser.password);
    if(!isPassword){
        res.ststus(400).json({message:"invalid cresential...."});
    }
    const token=jwt.sign({email:oldUser,id:oldUser._id},secret,{expiresIn:"1h"});
    res.status(201).json({result:oldUser,token})
    }catch(error){
        res.status(500).json({message:"not found "})
    }
}

// export const sigin=async(req,res)=>{
//     const{email,password}=req.body;
//     try{
//         const oldUser=await userModel.findOne({email})

//         if(!oldUser){
//             return res.status(400).json({'message':"user not exist"})
//         }
//         const isPassword=await bcrypt.compare(password,oldUser.password)
//         if(!isPassword){
//             return res.status(400).json({'message':"invalid credential"})
//         }
//         const token=jwt.sign({email:oldUser.email,id:oldUser._id},secret,{expiresIn:"1h"})
//         res.status(201).json({result:oldUser,token})

//     }catch (error) {
//         res.status(500).json({ message: "Something went wrong" });
//         console.log(error);
//       }
// }
