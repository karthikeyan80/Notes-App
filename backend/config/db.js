import mongoose from "mongoose";


export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB Successfully connected");
    }
    catch(error){
        console.log("error connecting to mongoDB ",error);
        process.exit(1) // exit from failure
    }
    
}