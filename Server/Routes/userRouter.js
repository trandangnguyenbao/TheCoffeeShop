import User from '../Models/UserModel.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import express from 'express'
import genarataToken from '../utils/genarateToken.js'
import mongoose from 'mongoose'
import protect from '../Middleware/AuthMiddleware.js'
import {toast} from 'react-toastify'

// import fildeUpLoad from require("express-fileupload")
// import users from './data/user.js';

const userRoute = express.Router()

// Get User
userRoute.get('/',(req,res)=>{
    User.find().then(data=>{
        res.status(200).json(data)
    }).catch(e=>{
        res.json({message:e})
    })
    
})

// GET ALL USER PAGINATION

// userRoute.get('/all', async (res,req) => {
//     try {
//         const page = parseInt(req.query.page);
//         const size = parseInt(req.query.size);

//         const skip = (page -1) * size;

//         const total = await User.countDocuments();
//         const users = await User.find().skip(skip).limit(size);

//         res.json({
//             records: users,
//             total,
//             page, 
//             size
//         });
//     } catch(error) {
//         console.log(error)
//         res.status(400).json(error)
//     }
// })

// CREATED NEW USER
userRoute.post("/",(req,res)=>{
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        phone: req.body.phone,
        gender: req.body.gender,
        password: req.body.password,
        address: req.body.address,
        chinhanh: req.body.chinhanh,
        chucvu: req.body.chucvu,
        isAdmin: req.body.isAdmin,
      });
      
      return user
        .save()
        .then((newUser) => {
            toast.success("Tạo tài khoản thành công!")
          return res.status(201).json({
            success: true,
            message: 'New cause created successfully',
            user: newUser,
          });
        })
        .catch((error) => {
            toast.error("Tạo tài khoản thất bại!")
          res.status(500).json({
            success: false,
            message: 'Server error. Please try again.',
            error: error.message,
          });
        });
})

// Delete User
userRoute.delete("/:id",(req,res)=>{
    User.deleteOne({_id : req.params.id})
    .then(data=>{
        res.status(200).json(data)
    }).catch(e=>{
        res.json({message: e})
    })
})

// LOGIN
userRoute.post("/login", 
    asyncHandler(async (req, res) => {
        const {phone, password} = req.body
        const user = await User.findOne({phone});
        if (user && (await user.macthPassword(password))){
            res.json({
                _id:user._id,
                name:user.name,
                phone:user.phone,
                chinhanh:user.chinhanh,
                chucvu:user.chucvu,
                _isAdmin:user.isAdmin,
                token:genarataToken(user._id),
                createdAt:user.createdAt,
                _id:user._id,
            })
        }else{
            res.status(400)
            throw new Error("Invalid Phone Or Password!")
        }
    })
)

// USER PROFILE
userRoute.get("/profile", 
    protect,
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id)
        if (user){
            res.json({
                _id:user._id,
                name:user.name,
                phone:user.phone,
                _isAdmin:user.isAdmin,
                createdAt:user.createdAt,
                _id:user._id,
            })
        }
        else{
            res.status(404)
            throw new Error("User not Found!")
        }
    })
)

// REGISTER
userRoute.post("/register", 
    asyncHandler(async (req, res) => {
        const {name, phone, password} = req.body;

        if (!name || !phone || !password) {
            return res.status(422)
        }
        const userExists = await User.findOne({phone});
        if (userExists){
            res.status(400)
            throw new Error("User already exists")
        }
        const user = await User.create({
            name,
            phone,
            password,
        });

        if (user){
            res.status(201).json({
                _id:user._id,
                name:user.name,
                phone:user.phone,
                _isAdmin:user.isAdmin,
            });
        }
        else{
            res.status(400)
            throw new Error("Invalid User Data");
        }
    })
)


// UPDATE USER
userRoute.put("/update/:id",(req,res)=>{
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        phone: req.body.phone,
        gender: req.body.gender,
        password: req.body.password,
        address: req.body.address,
        chinhanh: req.body.chinhanh,
      });

      var id = req.body._id;
      User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error,data) => {
        if (error){
            res.status(400)
            throw new Error("Not Update User!")
        }
        else{
            res.status(201).json({
                _id:user._id,
                name:user.name,
                phone:user.phone,
                _isAdmin:user.isAdmin,
            });
        }
      })
      
})
export default userRoute;