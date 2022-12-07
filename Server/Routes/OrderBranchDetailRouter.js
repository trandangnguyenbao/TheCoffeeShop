import express from 'express'
import asyncHandler from 'express-async-handler'
import genarataToken from '../utils/genarateToken.js'
import protect from '../Middleware/AuthMiddleware.js'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import OrderBranchDetail from '../Models/OrderBranchDetailModel.js'


const orderBranchDetailRoute = express.Router()

// Get User
orderBranchDetailRoute.get('/',(req,res)=>{
    OrderBranchDetail.find().then(data=>{
        res.status(200).json(data)
    }).catch(e=>{
        res.json({message:e})
    })
    
})

// CREATED NEW USER
orderBranchDetailRoute.post("/",(req,res)=>{
    const orderBranchDetail = new OrderBranchDetail({
        _id: mongoose.Types.ObjectId(),
        id_order: req.body.id_order,
        children: req.body.children
      });
      
      return orderBranchDetail
        .save()
        .then((newOrderBranchDetail) => {
          return res.status(201).json({
            success: true,
            message: 'New cause created successfully',
            orderBranchDetail: newOrderBranchDetail,
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
orderBranchDetailRoute.delete("/:id",(req,res)=>{
    OrderBranchDetail.deleteOne({_id : req.params.id})
    .then(data=>{
        res.status(200).json(data)
    }).catch(e=>{
        res.json({message: e})
    })
})

export default orderBranchDetailRoute;