import Catalog from '../Models/Catalog.js'
import asyncHandler from 'express-async-handler'
import express from 'express'
import mongoose from 'mongoose'

// import Catalogs from "./data/Catalog.js";

const catalogRoute = express.Router()

// catalogRoute.post('/', async( req, res) => {
//     Catalog.create(req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//       });
// })

catalogRoute.get('/',(req,res)=>{
    Catalog.find().then(data => {
        res.status(200).json(data)
    }).catch(e => {
        res.json({message:e})
    })
})

// DELETE CATALOG

catalogRoute.delete("/:id",(req,res)=>{
    Catalog.deleteOne({_id : req.params.id})
    .then(data=>{
        res.status(200).json(data)
    }).catch(e=>{
        res.json({message: e})
    })
})

// Find Catalog
catalogRoute.get("/:id", asyncHandler(async (req, res) => {
    const catalog = await Catalog.findById(req.params.id);
    if (catalog) {
        res.json(catalog)
    }
    else{
        res.status(404);
        throw new Error("Product Not Found")
    }
})
);

// CREATE CATALOG Coffee
catalogRoute.post("/",(req,res)=>{
    const catalog = new Catalog({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        path: req.body.path,
        TypeCatalogParent: req.body.TypeCatalogParent,
        img: req.body.img,
        discript: req.body.discript,
        children: req.body.children,
      });
      return catalog
      .save()
      .then((newCatalog) => {
        return res.status(201).json({
          success: true,
          message: 'New cause created successfully',
          catalog: newCatalog,
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

export default catalogRoute