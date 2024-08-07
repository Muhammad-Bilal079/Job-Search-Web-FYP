import express from 'express'
import registrationController from '../controllers/registrationController.js';
import registerValidationRules from '../validationRules/registerValidation.js'
const registerRoute = express.Router();

// yahan per express ki routing use ki hai 
registerRoute.post('/register',registerValidationRules(),registrationController)

export default registerRoute
