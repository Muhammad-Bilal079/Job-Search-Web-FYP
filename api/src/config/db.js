import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

// Database connection
mongoose.connect(`mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@cluster0.hsjhrzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(d=>console.log('database connected'))
.catch(e=>console.log('DB error',e))

export default mongoose