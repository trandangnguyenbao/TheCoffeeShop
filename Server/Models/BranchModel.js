import mongoose from "mongoose";

const BranchSchema = mongoose.Schema({
    Branch_id: {
        type: Number, 
        require: true
    }, 
    name: {
        type: String, 
        require: true
    }, 
    path: {
        type: String, 
        require: true
    }, 
    Country_name: {
        type: String, 
        require: true
    }, 
    Province_name: {
        type: String, 
        require: true
    }, 
    staff: {
        type: Number, 
        require: true
    }, 
    doanhthu: {
        type: Number, 
        require: true
    }, 
    map: {
        type: String, 
        require: true
    },
    address: {
        type: String, 
        require: true
    },
    image: {
        type: String, 
        require: true
    },
}, 
{
    timestamps: true
}
)

const Branch = mongoose.model('Branch', BranchSchema);

export default Branch