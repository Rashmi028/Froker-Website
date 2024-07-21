import mongoose from "mongoose"

const blogSchema = new mongoose.Schema(
    {
        id: {
            type: String,
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
        likedBy: { 
            type: [String],  // Assuming likedBy is an array of strings
            default: [],
            unique: false  // Ensure this is not set to true
        },
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