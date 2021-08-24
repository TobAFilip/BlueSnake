import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    image: {
        type: Buffer
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    diveLocation: {
        type: String
    },
    diveDepth: {
        type: Number
        // Meters
    }
});

export const Post = mongoose.model("Post", postSchema)