import mongoose from "mongoose";

const CountrySchema = mongoose.Schema({
    country_id: {
        type: Number, 
        require: true
    }, 
    name: {
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

const Country = mongoose.model('Country', CountrySchema);

export default Country