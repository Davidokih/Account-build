import mongoose from "mongoose"

interface User {
    userName: string;
    email: string;
    fullName: string;
    accessToken: number;
    password: string;
    following: {}[];
}

interface iUser extends User, mongoose.Document {}
const userModel = new mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    fullName: {
        type: String
    },
    accessToken: {
        type: Number
    },
    password: {
        type: String
    },
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "followings"
    }],
    followers:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "follower"
    }],
},{timestamps: true})

export default mongoose.model<iUser>("users", userModel)