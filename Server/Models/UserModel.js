import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
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
    birthday: {
        type: String, 
        require: true
    }, 
    password: {
        type: String, 
        require: true,
    }, 
    chucvu: {
        type: String, 
        require: true,
    }, 
    chinhanh: {
        type: String, 
        require: true,
    }, 
    address: {
        type: String, 
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


// login
userSchema.methods.macthPassword = async function (enterPassword){
    return await bcrypt.compare(enterPassword, this.password);
};

// REGISTER
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


const User = mongoose.model('User', userSchema);

export default User