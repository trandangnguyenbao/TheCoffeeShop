import mongoose from "mongoose";

const ProvinceSchema = mongoose.Schema({
    province_id: {
        type: Number, 
        require: true
    }, 
    name: {
        type: String, 
        require: true
    }, 
    Country_name: {
        type: String, 
        require: true
    }, 
    branch: {
        type: Number, 
        require: true
    }, 
}, 
{
    timestamps: true
}
)

const Provinces = mongoose.model('Province', ProvinceSchema);

export default Provinces