// import mongoose from "mongoose";

// const ProductSchema = mongoose.Schema({
//     user : {
//         type: mongoose.Schema.Types.ObjectId, 
//         require: true, 
//         ref: "User"
//     },
//     ID_Order: {
//         type: Number, 
//         require: true
//     },
//     orderItems: [
//         {
//             name: {type: String, require: true}, 
//             quantity: {type: Number, require: true}, 
//             image: {type: String, require: true}, 
//             price: {type: Number, require: true}, 
//             Products: {
//                 type: mongoose.Schema.Types.ObjectId,
//                 require: true,
//                 ref: "Product"
//             }
//         }
//     ], 
//     ShippingAddress: {
//         address: {type: String, require: true}, 
//         posTalCode: {type: String, require: true}
//     }
    
// }, 
// {
//     timestamps: true
// }
// )

// const Products = mongoose.model('Product', ProductSchema);

// export default Products