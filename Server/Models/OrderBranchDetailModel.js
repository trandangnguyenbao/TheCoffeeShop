import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: {
        type: String, 
        require: true
    }, 
    cost: {
        type: Number, 
        require: true
    }, 
    soluong: {
        type: Number, 
        require: true
    }, 
    tongtien: {
        type: Number, 
        require: true
    }
},
    {
        timestamps: true
    }
)
const orderBranchDetailSchema = mongoose.Schema({
    id_order: {
        type: Number, 
        require: true
    }, 
    children: [
        {
            type: Object,
            require: true
        }
    ] 
}, 
{
    timestamps: true
}
)

const OrderBranchDetail = mongoose.model('orderBranchDetail', orderBranchDetailSchema);

export default OrderBranchDetail