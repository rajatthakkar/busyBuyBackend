import express from "express";
import UserController from "./user.controller.js";
const userController = new UserController()
const userRoutes = express.Router()

userRoutes.get('/login',(req,res)=>{
         userController.logIn(req,res)
})
userRoutes.get('/signUn',(req,res)=>{
               userController.signIn(req,res)
})
userRoutes.get('/logout',(req,res)=>{
      userController.logout(req,res)
})



export default userRoutes