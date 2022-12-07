import express from "express";
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import Orders from "../Models/OrderModel.js";
import OrderTable from "../Models/OrderTable.js";
const orderTableRoute = express.Router();

// GET ALL BRANCH
orderTableRoute.get('/',(req,res)=>{
    OrderTable.find().then(data => {
        res.status(200).json(data)
    }).catch(e => {
        res.json({message:e})
    })
})

// UPDATE ORDER
orderTableRoute.put("/update/:id",(req,res)=>{
    const orderTable = new OrderTable({
        _id: mongoose.Types.ObjectId(),
        status: req.body.status,
      });
  
    var id = req.body._id;
    OrderTable.findByIdAndUpdate(req.params.id, {
        $set: req.body
        }, (error,data) => {
          if (error){
              res.status(400)
              throw new Error("Not Update Order!")
          }
          else{
            res.status(201).json({
              _id:orderTable._id,
              status: orderTable.status,
          });
          }
        })
      })

      // CEEATED TABLE ORDER
      orderTableRoute.post("/",(req,res)=>{
        const orderTable = new OrderTable({
            _id: mongoose.Types.ObjectId(),
            id_order: req.body.id_order,
            name: req.body.name,
            phone: req.body.phone,
            Soluong: req.body.Soluong,
            note: req.body.note,
            chinhanh: req.body.chinhanh,
          });
          
          return orderTable
            .save()
            .then((newOrderTable) => {
              return res.status(201).json({
                success: true,
                message: 'New cause created successfully',
                orderTable: newOrderTable,
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
    // DELETE PRODUCT
    orderTableRoute.delete("/:id",(req,res)=>{
        OrderTable.deleteOne({_id : req.params.id})
        .then(data=>{
            res.status(200).json(data)
        }).catch(e=>{
            res.json({message: e})
        })
    })
    

export default orderTableRoute;