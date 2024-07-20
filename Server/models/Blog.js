import mongoose from "mongoose"

const blogSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        Title: {
            type: String,
            required: true,
            trim: true,
        },
        thumbnail: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            required: true,
            trim: true,
        },
        readTime: {
            type: String,
            required: true,
            trim: true,
        },
        likes: {
            type: Number,
            default: 0
        },
        likedBy: [{
            type: String, 
            unique: true
        }],
        description: [{
        descTitle: {
            type: String,
            required: true,
            trim: true,
        },
        descContent: {
            type: String,
            required: true,
            trim: true,
        },
        descImage: {
            type: String,
            trim: true,
        }
    }],
        createdAt: {
            type: Date,
            default: Date.now
        },
    }
);

const Blog = mongoose.model("blog", blogSchema);
export default Blog;