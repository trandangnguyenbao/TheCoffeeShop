import mongoose from "mongoose";
const orderBranchSchema = mongoose.Schema({
    id_order: {
        type: Number, 
        require: true
    }, 
    tongtien: {
        type: Number, 
        require: true
    }, 
    chinhanh: {
        type: String,
        require: true
    }, 
    phone: {
        type: String,
        require: true
    }, 
    soluong: {
        type: Number, 
        require: true
    }, 
}, 
{
    timestamps: true
}
)

const OrderBranch = mongoose.model('orderBranch', orderBranchSchema);

export default OrderBranch