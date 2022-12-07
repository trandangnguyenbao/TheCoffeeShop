import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    title: {
        type: String, 
        require: true
    }, 
    path_name: {
        type: String, 
        require: true
    }, 
    cost: {
        type: Number, 
        require: true
    }, 
    img: {
        type: String, 
        require: true
    },
    catalog: {
        type: String, 
        require: true
    },
    catalogParent: {
        type: String, 
        require: true
    },
    nameCatalog: {
        type: String, 
        require: true
    },
    // amount: {
    //     type: Number, 
    //     require: true, 
    //     default: 0,
    // }, 
    
}, 
{
    timestamps: true
}
)

const Products = mongoose.model('ProductForCatalog', ProductSchema);

export default Products