import express from 'express'
import Stories from '../Models/StoryModel.js';

const storyRoute = express.Router()

storyRoute.get('/', (req, res) => {
    Stories.find().then(data => {
        res.status(200).json(data)
    }).catch(e => {
        res.json({message:e})
    })
})

// Delete Story
storyRoute.delete('/:id',(req,res)=>{
    Stories.deleteOne({_id : req.params.id})
    .then(data=>{
        res.status(200).json(data)
    }).catch(e=>{
        res.json({message: e})
    })
})


export default storyRoute;