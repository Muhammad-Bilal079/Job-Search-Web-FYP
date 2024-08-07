import jwt from 'jsonwebtoken'

// Secret key for signing tokens (store this securely)
const SECRET_KEY = process.env.JWT_TOKEN;

// Function to generate JWT token
const generateToken = (req) => {
  return  jwt.sign(req.body, SECRET_KEY) 
};

// Function to verify JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

export default { generateToken, verifyToken };
