import express from "express";
import UserController from "./user.controller.js";
const userController = new UserController()
const userRoutes = express.Router()

userRoutes.post('/login',(req,res)=>{
         userController.logIn(req,res)
})
userRoutes.post('/signup',(req,res)=>{
               userController.signUp(req,res)
})
userRoutes.get('/logout',(req,res)=>{
      userController.logout(req,res)
})



export default userRoutes