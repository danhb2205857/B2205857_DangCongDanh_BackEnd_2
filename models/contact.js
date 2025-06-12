import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    favorite: { type: Boolean, required: false }
})

const Contact = mongoose.model("Contact", contactSchema, "contacts")
export default Contact