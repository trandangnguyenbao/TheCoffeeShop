import mongoose from "mongoose";

const StateSchema = mongoose.Schema({
    country_id: {
        type: Number, 
        require: true
    }, 
    name: {
        type: String, 
        require: true
    }, 
    district: [
        {
            district_id: {
                type: Number, 
                require: true
            },
            country_id: {
                type: Number, 
                require: true
            },
            name: {
                type: String, 
                require: true
            },
            street: [
                {
                    street_id: {
                        type: Number, 
                        require: true
                    },
                    district_id: {
                        type: Number, 
                        require: true
                    },
                    country_id: {
                        type: Number, 
                        require: true
                    },
                    name: {
                        type: String, 
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
                    path: {
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
                }
            ]
        }
    ], 
}, 
{
    timestamps: true
}
)

const States = mongoose.model('States', StateSchema);

export default States