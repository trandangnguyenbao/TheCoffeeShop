import express from "express";
import Products from "./Models/ProductModel.js";
import Product from './data/ProductForCatalog.js'
const ImportData = express.Router()

// ImportData.post("/user", async (req, res) => {
//     await User.remove({})
//     const importUser = await User.insertMany(users)
//     res.send({importUser});
// });


ImportData.post('/collections/:path', async( req, res) => {
    await Products.deleteMany({})
    const importProducts = await Products.insertMany(Product)
    res.send({importProducts})
});

export default ImportData;  