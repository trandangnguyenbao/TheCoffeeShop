import express from 'express'
import asyncHandler from 'express-async-handler'
import Products from '../Models/ProductModel.js'
const productDetailRoute= express.Router()


productDetailRoute.get('/',(req,res)=>{
    Products.find().then(data => {
        res.status(200).json(data)
    }).catch(e => {
        res.json({message:e})
    })
})

// GET PRODUCT FOR PATH NAME
// productDetailRoute.get("/:id", async (req, res)=> {
//     const products = await Products.find(product => product.id === req.params.id);
//     if (products) {
//       res.send(products);
//     } else {
//       res.status(404).send({message:"product not found"})
//     } 
//     });

productDetailRoute.get("/:id", asyncHandler(async (req, res) => {
        const product = await Products.findById(req.params.id);
        if (product) {
            res.json(product)
        }
        else{
            res.status(404);
            throw new Error("Product Not Found")
        }
    })
);




export default productDetailRoute;  