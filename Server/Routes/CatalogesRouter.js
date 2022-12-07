import express from 'express'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import Cataloges from '../Models/Cataloges.js'
import Catalogoes from '../Models/CatalogMolder.js'
// import Catalogs from "./data/Catalog.js";

const catalogesRoute = express.Router()

// catalogRoute.post('/', async( req, res) => {
//     Catalog.create(req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//       });
// })

catalogesRoute.get('/',(req,res)=>{
    Catalogoes.find().then(data => {
        res.status(200).json(data)
    }).catch(e => {
        res.json({message:e})
    })
})

// DELETE CATALOG

catalogesRoute.delete("/:id",(req,res)=>{
    Catalogoes.deleteOne({_id : req.params.id})
    .then(data=>{
        res.status(200).json(data)
    }).catch(e=>{
        res.json({message: e})
    })
})

// Find Catalog
catalogesRoute.get("/:id", asyncHandler(async (req, res) => {
    const catalog = await Catalogoes.findById(req.params.id);
    if (catalog) {
        res.json(catalog)
    }
    else{
        res.status(404);
        throw new Error("Product Not Found")
    }
})
);

// CREATE CATALOG CREATE
catalogesRoute.post("/",(req,res)=>{
    const catalog = new Catalogoes({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        path: req.body.path,
        TypeCatalogParent: req.body.TypeCatalogParent,
        img: req.body.img,
        discript: req.body.discript,
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



// UPDATE PRODUCT

catalogesRoute.put("/update/:id",(req,res)=>{
    const catalog = new Catalogoes({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        path: req.body.path,
        TypeCatalogParent: req.body.TypeCatalogParent,
        img: req.body.img,
        discript: req.body.discript,
      });
  
      var id = req.body._id;
      Catalogoes.findByIdAndUpdate(req.params.id, {
        $set: req.body
        }, (error,data) => {
          if (error){
              res.status(400)
              throw new Error("Not Update Catalog!")
          }
          else{
            res.status(201).json({
                _id:catalog._id,
                name: catalog.name,
                path: catalog.path,
                TypeCatalogParent: catalog.TypeCatalogParent,
                img: catalog.img,
                discript: catalog.discript,
          });
          }
        })
      })
  
  
  

export default catalogesRoute