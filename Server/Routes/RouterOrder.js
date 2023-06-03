import Orders from "../Models/OrderModel.js";
import asyncHandler from 'express-async-handler'
import express from "express";
import mongoose from 'mongoose'

const orderRoute = express.Router();

// GET ALL BRANCH
orderRoute.get('/',(req,res)=>{
    Orders.find().then(data => {
        res.status(200).json(data)
    }).catch(e => {
        res.json({message:e})
    })
})

// CREATED NEW USER
orderRoute.post("/", (req, res) => {
  const order = new Orders({
    _id: new mongoose.Types.ObjectId(), // Use 'new' keyword before mongoose.Types.ObjectId()
    id_order: req.body.id_order,
    name: req.body.name,
    totalPrice: req.body.totalPrice,
    status: req.body.status,
  });

  return order
    .save()
    .then((newOrder) => {
      return res.status(201).json({
        success: true,
        message: 'New cause created successfully',
        order: newOrder,
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
});



// UPDATE ORDER
orderRoute.put("/update/:id",(req,res)=>{
    const order = new Orders({
        _id: new mongoose.Types.ObjectId(),
        status: req.body.status,
      });
  
    var id = req.body._id;
    Orders.findByIdAndUpdate(req.params.id, {
        $set: req.body
        }, (error,data) => {
          if (error){
              res.status(400)
              throw new Error("Not Update Order!")
          }
          else{
            res.status(201).json({
              _id:order._id,
              status: order.status,
          });
          }
        })
      })

export default orderRoute;