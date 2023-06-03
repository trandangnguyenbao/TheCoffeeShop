import Catalog from '../Models/Catalog.js'
import Products from '../Models/ProductModel.js'
import asyncHandler from 'express-async-handler'
import express from 'express'
import mongoose from 'mongoose'

// import multer from 'multer'

// const upload = multer({dest: 'uploads/'})

const productRoute = express.Router()

// Get All Product
productRoute.get('/',(req,res)=>{
    Products.find().then(data => {
        res.status(200).json(data)
    }).catch(e => {
        res.json({message:e})
    })
})
// GET ALL PRODUCT PAGINATION
productRoute.get('/all', async (res,req) => {
  try {
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);

      const skip = (page -1) * size;

      const total = await Products.countDocuments();
      const product = await Products.find().skip(skip).limit(size);

      res.json({
          records: product,
          total,
          page, 
          size
      });
  } catch(error) {
      console.log(error)
      res.status(400).json(error)
  }
})


productRoute.post("/",(req,res)=>{
    const product = new Products({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        path_name: req.body.path_name,
        descript: req.body.descript,
        cost: req.body.cost,
        img: req.body.img,
        catalog: req.body.catalog,
        catalogParent: req.body.catalogParent,
      });
      
      return product
        .save()
        .then((newProduct) => {
          return res.status(201).json({
            success: true,
            message: 'New cause created successfully',
            product: newProduct,
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
productRoute.delete("/:id",(req,res)=>{
    Products.deleteOne({_id : req.params.id})
    .then(data=>{
        res.status(200).json(data)
    }).catch(e=>{
        res.json({message: e})
    })
})


// UPDATE PRODUCT

productRoute.put("/update/:id",(req,res)=>{
  const product = new Products({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      path_name: req.body.path_name,
      descript: req.body.descript,
      cost: req.body.cost,
      img: req.body.img,
      catalog: req.body.catalog,
      catalogParent: req.body.catalogParent,
    });

    var id = req.body._id;
    Products.findByIdAndUpdate(req.params.id, {
      $set: req.body
      }, (error,data) => {
        if (error){
            res.status(400)
            throw new Error("Not Update User!")
        }
        else{
          res.status(201).json({
            _id:product._id,
            title: product.title,
            path_name: product.path_name,
            descript: product.descript,
            cost: product.cost,
            img: product.img,
            catalog: product.catalog,
            catalogParent: product.catalogParent,
        });
        }
      })
    })



// PAGINATION

// productRoute.get('/pages/:page', (req, res, next) => {
//     let perpage = 10;
//     let page = req.params.page || 1;

//     Products.find()
//     .skip((perpage * page) - perpage)
//     .limit(perpage)
//     .exec((err, product) => {
//       Products.countDocuments((err, count) => {
//         if (err) return next(err);
//         res.json(product)
//       });
//     });
// });


// GET PRODUCT BY PATH NAME

// productRoute.get('/:name', (req, res, next) => {
//     Products.findOne({req.body.name}).then(data => {
//         res.status(200).json(data)
//     })
//     .catch(e => {
//         res.json({message:e})
//     }) 
// }
// )








export default productRoute;