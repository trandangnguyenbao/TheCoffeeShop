import mongoose from "mongoose";

const CatalogSchema = mongoose.Schema({
    id: {
        type: number, 
        require: true, 
        default: 1
    }, 
    name: {
        type: String, 
        require: true
    },  
    path: {
        type: String, 
        require: true
    },
    children: {
        name: {
            type: String, 
            require: true
        }, 
        path: {
            type: String, 
            require: true
        },
        TypeCatalogParent: {
            type: String, 
            require: true
        }
    }
}, 
{
    timestamps: true
}
)

const Catalog = mongoose.model('Catalog', CatalogSchema);

export default Catalog