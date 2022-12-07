import mongoose  from "mongoose";

const StorySchema = mongoose.Schema({
    type_story: {
        type: String, 
        require: true
    },
    children: [
        {
            img: {
                type: String, 
                require: true
            },
            title: {
                type: String, 
                require: true
            },
            link: {
                type: String, 
                require: true
            },
            descript: {
                type: String, 
                require: true
            },
            date: {
                type: String, 
                require: true
            },
        }
    ]
},
{
    timestamps: true
})

const Stories = mongoose.model('Stories', StorySchema);
export default Stories