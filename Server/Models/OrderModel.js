import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    id_order: {
        type: Number, 
        require: true
    }, 
    name: {
        type: String, 
        require: true
    }, 
    totalPrice: {
        type: Number, 
        require: true
    }, 
    status: {
        type: String, 
        require: true
    }, 
}, 
{
    timestamps: true
}
)

const Orders = mongoose.model('Order', OrderSchema);

export default Orders