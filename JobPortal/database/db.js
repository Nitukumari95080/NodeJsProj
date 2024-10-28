import mongoose, { Mongoose } from "mongoose";

const connectDB=async ()=>{
    try {
        const connection=await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connectionted to Mongodb`)
    } catch (error) {
        console.log(`Mongodb conncetion error ${error}`)
    }
}

export default connectDB;