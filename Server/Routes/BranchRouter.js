import express from "express";
import asyncHandler from 'express-async-handler'
import Branch from "../Models/BranchModel.js";
import mongoose from 'mongoose'
const branchRoute = express.Router()

// GET ALL BRANCH
branchRoute.get('/',(req,res)=>{
    Branch.find().then(data => {
        res.status(200).json(data)
    }).catch(e => {
        res.json({message:e})
    })
})

// Find Catalog
branchRoute.get("/:Branch_id", asyncHandler(async (req, res) => {
    const branch = await Branch.findById(req.params.Branch_id);
    if (branch) {
        res.json(branch)
    }
    else{
        res.status(404);
        throw new Error("Product Not Found")
    }
})
);

// CREATED NEW BRANCH
branchRoute.post("/",(req,res)=>{
    const branch = new Branch({
        _id: mongoose.Types.ObjectId(),
        Branch_id: req.body.Branch_id,
        Country_name: req.body.Country_name,
        Province_name: req.body.Province_name,
        name: req.body.name,
        path: req.body.path,
        map: req.body.map,
        address: req.body.address,
        image: req.body.image,
      });
      
      return branch
        .save()
        .then((newBranch) => {
          return res.status(201).json({
            success: true,
            message: 'New cause created successfully',
            branch: newBranch,
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

// DELETE BRANCH

branchRoute.delete("/:id",(req,res)=>{
    Branch.deleteOne({_id : req.params.id})
    .then(data=>{
        res.status(200).json(data)
    }).catch(e=>{
        res.json({message: e})
    })
})


// UPDATE BRANCH

branchRoute.put("/update/:id",(req,res)=>{
    const branch = new Branch({
        _id: mongoose.Types.ObjectId(),
        Branch_id: req.body.Branch_id,
        Country_name: req.body.Country_name,
        Province_name: req.body.Province_name,
        name: req.body.name,
        path: req.body.path,
        map: req.body.map,
        address: req.body.address,
        image: req.body.image,
      });
  
      var id = req.body._id;
      Branch.findByIdAndUpdate(req.params.id, {
        $set: req.body
        }, (error,data) => {
          if (error){
              res.status(400)
              throw new Error("Not Update Branch!")
          }
          else{
            res.status(201).json({
              _id:branch._id,
              Branch_id: branch.Branch_id,
              Province_name: branch.Province_name,
              name: branch.name,
              path: branch.path,
              map: branch.map,
              address: branch.address,
              image: branch.image,
              Country_name: branch.Country_name,
          });
          }
        })
      })

export default branchRoute;