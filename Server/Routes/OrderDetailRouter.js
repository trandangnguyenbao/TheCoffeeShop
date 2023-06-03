import OrderDetails from "../Models/OrderDetailModel.js";
import asyncHandler from 'express-async-handler'
import express from "express";
import mongoose from 'mongoose'

const orderDetailRoute = express.Router();

// GET ALL BRANCH
orderDetailRoute.get('/',(req,res)=>{
    OrderDetails.find().then(data => {
        res.status(200).json(data)
    }).catch(e => {
        res.json({message:e})
    })
})

orderDetailRoute.post("/",(req,res)=>{
  const orderDetail = new OrderDetails({
      _id: new mongoose.Types.ObjectId(),
      id_order: req.body.id_order,
      children: req.body.children
    });
    
    return orderDetail
      .save()
      .then((newOrderDetail) => {
        return res.status(201).json({
          success: true,
          message: 'New cause created successfully',
          orderDetail: newOrderDetail,
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

export default orderDetailRoute;