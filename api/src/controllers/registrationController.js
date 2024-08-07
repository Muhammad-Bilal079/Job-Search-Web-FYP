import User from "../models/user.js";
import bcrypt from 'bcrypt'
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken'

let registrationController = async (req, res) => {

    // Find a user by email
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
        // If user exists, respond with the user data
        return res.status(200).json({
            msg: "User already exixst"
        });
    }

    // Extract validation errors
    const errors = validationResult(req);

    // If errors are found, return them to the client
    if (!errors.isEmpty()) {
        // Get the first error message
        const firstError = errors.array()[0];

        return res.status(400).json({
            field: firstError.param,
            message: firstError.msg,
        });
    }
    // bcrypt password 
    let saltRounds = 10
    let encryptedpassword = bcrypt.hashSync(req.body.password, saltRounds);
    req.body.password = encryptedpassword

    // db code here 
    const user = new User(req.body);
    // console.log(user);

    user.save()
        .then(d => {
            // JWT Token 
            var token = jwt.sign(req.body, process.env.JWT_TOKEN)

            return res.status(200).json({
                msg: "user saved",
                userToken: token
            });
        }).catch((error) => {
            return res.status(400).json({
                msg: "User not saved due to some error",
                error: error.message || 'Unknown error' // Ensure error message is sent
            });
        });


}

export default registrationController