import express from "express";
import './db/conn.js'
import mongoose from "mongoose";
import Blog from './models/Blog.js';
const app=express();
const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("Hello World");
})
// Create a new blog post
const newBlogPost = new Blog({
    _id: mongoose.Schema.Types.ObjectId,
    blogTitle: 'My First Blog Post',
    thumbnail: 'https://example.com/thumbnail.jpg',
    author: 'John Doe',
    readTime: '5 minutes',
    description: [
      {
        descTitle: 'Introduction',
        descContent: 'This is the introduction to my blog post.',
        descImage: 'https://example.com/intro-image.jpg'
      }
    ]
  });
  
  newBlogPost.save()
    .then((blog) => {
      console.log(`Blog post created: ${blog.blogTitle}`);
    })
    .catch((err) => {
      console.error(err);
    });
app.listen(port,()=>{
    console.log("Server is on port "+port);
})