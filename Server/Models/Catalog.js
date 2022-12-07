import mongoose from "mongoose";

const CatalogSchema = mongoose.Schema({
    name: {
        type: String, 
        require: true
    },  
    path: {
        type: String, 
        require: true
    },
    img: {
        type: String, 
        require: true
    },
    children: [
        {name: {
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
        },
        img: {
            type: String, 
            require: true
        }, 
        discript: {
            type: String, 
            require: true
        } 
    } 
    ]
}, 
{
    timestamps: true
}
)

const Catalog = mongoose.model('Catalogs', CatalogSchema);

export default Catalog