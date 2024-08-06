import express from 'express'
import registrationController from '../controllers/registrationController.js';
const registerRoute = express.Router();

// yahan per express ki routing use ki hai 
registerRoute.post('/register',registrationController)

export default registerRoute
