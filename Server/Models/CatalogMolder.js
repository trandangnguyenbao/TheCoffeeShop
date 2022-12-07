import mongoose from "mongoose";

const CatalogsSchema = mongoose.Schema({
        name: {
            type: String, 
            require: true
        }, 
        path: {
            type: String, 
            require: true
        },
        m: {
            type: String, 
            require: true
        },
        img: {
            type: String, 
            require: true
        }, 
        sanpham: {
            type: Number, 
            require: true
        }, 
        discript: {
            type: String, 
            require: true
        } 
}, 
{
    timestamps: true
}
)

const Catalogoes = mongoose.model('Cataloges', CatalogsSchema);

export default Catalogoes