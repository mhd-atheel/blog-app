import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    bio: {
        type: String,
        default:'No bio',
        unique: false,
    },
    lives: {
        type: String,
        default:'No living',
        unique: false,
    },
    work: {
        type: String,
        default:'No work',
        unique: false,
    },


},{timestamps:true})


const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;