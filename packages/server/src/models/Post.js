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
    userid: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    // Dive Metadata
    postType: {
        type: String
    },
    diveLocation: {
        type: String
    },
    diveTime: {

    },
    diveDepth: {
        type: Number
        // Meters
    }
});

export const Post = mongoose.model("Post", postSchema)