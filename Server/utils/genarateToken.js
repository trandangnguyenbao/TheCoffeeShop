// import { modelNames } from "mongoose";

import jwt from 'jsonwebtoken'

const genarataToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",   
    });
};

export default genarataToken