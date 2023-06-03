import Branch from "../Models/BranchModel.js";
import asyncHandler from 'express-async-handler'
import express from "express";
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
        _id: new mongoose.Types.ObjectId(),
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

branchRoute.put("/update/:id", async (req, res) => {
  const branch = {
    _id: req.body._id,
    Branch_id: req.body.Branch_id,
    Country_name: req.body.Country_name,
    Province_name: req.body.Province_name,
    name: req.body.name,
    path: req.body.path,
    map: req.body.map,
    address: req.body.address,
    image: req.body.image,
  };

  try {
    const updatedBranch = await Branch.findByIdAndUpdate(req.params.id, branch, { new: true });

    if (!updatedBranch) {
      res.status(404).json({ error: 'Branch not found' });
      return;
    }

    res.status(201).json(updatedBranch);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update branch' });
  }
});

export default branchRoute;