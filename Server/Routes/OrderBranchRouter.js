import OrderBranch from '../Models/OrderBranch.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import express from 'express'
import genarataToken from '../utils/genarateToken.js'
import mongoose from 'mongoose'
import protect from '../Middleware/AuthMiddleware.js'

const orderBranchRoute = express.Router()

// Get User
orderBranchRoute.get('/',(req,res)=>{
    OrderBranch.find().then(data=>{
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
orderBranchRoute.post("/",(req,res)=>{
    const orderBranch = new OrderBranch({
        _id: new mongoose.Types.ObjectId(),
        tongtien: req.body.tongtien,
        soluong: req.body.soluong,
        chinhanh: req.body.chinhanh,
        phone: req.body.phone,
        id_order: req.body.id_order,
      });
      
      return orderBranch
        .save()
        .then((newOrderBranch) => {
          return res.status(201).json({
            success: true,
            message: 'New cause created successfully',
            orderBranch: newOrderBranch,
          });
        })
        .catch((error) => {
            console.log(error);
          res.status(500).json({
            success: false,
            message: 'Server error. Please try again.',
            error: error.message,
          });
        });
})

// Delete Order
orderBranchRoute.delete("/:id",(req,res)=>{
    OrderBranch.deleteOne({_id : req.params.id})
    .then(data=>{
        res.status(200).json(data)
    }).catch(e=>{
        res.json({message: e})
    })
})

// // UPDATE USER
// userRoute.put("/update/:id",(req,res)=>{
//     const user = new User({
//         _id: mongoose.Types.ObjectId(),
//         name: req.body.name,
//         phone: req.body.phone,
//         gender: req.body.gender,
//         password: req.body.password,
//         address: req.body.address,
//         chinhanh: req.body.chinhanh,
//       });

//       var id = req.body._id;
//       User.findByIdAndUpdate(req.params.id, {
//         $set: req.body
//       }, (error,data) => {
//         if (error){
//             res.status(400)
//             throw new Error("Not Update User!")
//         }
//         else{
//             res.status(201).json({
//                 _id:user._id,
//                 name:user.name,
//                 phone:user.phone,
//                 _isAdmin:user.isAdmin,
//             });
//         }
//       })
      
// })
export default orderBranchRoute;