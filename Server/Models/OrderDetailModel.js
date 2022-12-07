import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: {
        type: String, 
        require: true
    }, 
    soluong: {
        type: Number, 
        require: true
    }, 
    tongtien: {
        type: Number, 
        require: true
    },
    cost: {
        type: Number, 
        require: true
    },
    image: {
        type: String, 
        require: true
    }
},
    {
        timestamps: true
    }
)

const OrderDetailSchema = mongoose.Schema({
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

const OrderDetails = mongoose.model('OrderDetail', OrderDetailSchema);

export default OrderDetails