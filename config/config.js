import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URL).then((res) => {
            console.log("Kết nối Mongo Thành công...")
        });
    } catch (error) {
        console.error()
        console.log("Kết nối Mongo thất bại...")
    }
} 
export default connectDB;