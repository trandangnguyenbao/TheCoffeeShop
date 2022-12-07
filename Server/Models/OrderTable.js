import mongoose from "mongoose";

const OrderTableSchema = mongoose.Schema({
    id_order: {
        type: Number, 
        require: true
    }, 
    name: {
        type: String, 
        require: true
    }, 
    phone: {
        type: String, 
        require: true
    }, 
    Soluong: {
        type: Number, 
        require: true
    }, 
    note: {
        type: String, 
        require: true
    }, 
    chinhanh: {
        type: String, 
        require: true
    }, 
}, 
{
    timestamps: true
}
)

const OrderTable = mongoose.model('OrderTable', OrderTableSchema);

export default OrderTable