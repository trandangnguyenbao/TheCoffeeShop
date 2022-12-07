import express from "express";
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import staff from "../Models/StaffModle.js";
const StaffRoute = express.Router();

// GET ALL BRANCH
StaffRoute.get('/',(req,res)=>{
    staff.find().then(data => {
        res.status(200).json(data)
    }).catch(e => {
        res.json({message:e})
    })
})

// UPDATE ORDER
StaffRoute.put("/update/:id",(req,res)=>{
    const Staff = new staff({
        _id: mongoose.Types.ObjectId(),
        status: req.body.status,
      });
  
    var id = req.body._id;
    staff.findByIdAndUpdate(req.params.id, {
        $set: req.body
        }, (error,data) => {
          if (error){
              res.status(400)
              throw new Error("Not Update Order!")
          }
          else{
            res.status(201).json({
              _id:Staff._id,
              status: Staff.status,
          });
          }
        })
      })

      // CEEATED TABLE ORDER
      StaffRoute.post("/",(req,res)=>{
        const Staff = new staff({
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            phone: req.body.phone,
            gender: req.body.gender,
            birthday: req.body.birthday,
            Branch: req.body.Branch,
            salary: req.body.salary,
          });
          
          return Staff
            .save()
            .then((newStaff) => {
              return res.status(201).json({
                success: true,
                message: 'New cause created successfully',
                Staff: newStaff,
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
    StaffRoute.delete("/:id",(req,res)=>{
        staff.deleteOne({_id : req.params.id})
        .then(data=>{
            res.status(200).json(data)
        }).catch(e=>{
            res.json({message: e})
        })
    })


export default StaffRoute;