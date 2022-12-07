import express from "express";
import States from "../Models/StateModel.js";
import asyncHandler from 'express-async-handler'

const stateRoute = express.Router()

stateRoute.get('/',(req,res)=>{
    States.find().then(data => {
        res.status(200).json(data)
    }).catch(e => {
        res.json({message:e})
    })
})

// const states = States.map((state) => {
//     return (
//         state.district.map((district) => {
//             return (
//                 district.street
//             )
//         })
//     )
// })

// stateRoute.get('/:id', asyncHandler(async (req, res) => {
//     const state = await states.findById(req.params.id);
//     if (state) {
//         res.json(state)
//     }
//     else {
//         res.status(404)
//         throw new Error("State Not Found");
//     }
// }))

// stateRoute.get("/shop/:id", asyncHandler(async (req, res) => {
//     const state = await States.findById(req.params.id);
//     if (state) {
//         res.json(state)
//     }
//     else{
//         res.status(404);
//         throw new Error("State Not Found")
//     }
// })
// );

export default stateRoute;