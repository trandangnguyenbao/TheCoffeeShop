import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const staffSchema = mongoose.Schema({
    name: {
        type: String, 
        require: true
    }, 
    phone: {
        type: String, 
        require: true
    }, 
    gender: {
        type: String, 
        require: true
    }, 
    birthday: {
        type: String, 
        require: true,
    }, 
    address: {
        type: String, 
        require: true
    }, 
    Branch: {
        type: String, 
        require: true,
    },
    salary: {
        type: Number, 
        require: true,
    }
}, 
{
    timestamps: true
}
)

const staff = mongoose.model('Staff', staffSchema);

export default staff