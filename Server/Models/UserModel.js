import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
    password: {
        type: String, 
        require: true,
    }, 
    address: {
        type: String, 
        require: true
    }, 
    birtdDay: {
        type: Date, 
        require: true
    }, 
    isAdmin: {
        type: Boolean, 
        require: true, 
        default: false
    }
}, 
{
    timestamps: true
}
)

const User = mongoose.model('User', userSchema);

export default User