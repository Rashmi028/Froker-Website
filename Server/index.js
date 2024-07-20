import express from "express";
import "./db/conn.js";
import mongoose from "mongoose";
import Blog from './models/Blog.js';
const app=express();
const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("Hello World");
});
  
app.post('/blog', (req, res) => {
    const { title, thumbnail, author, readTime, description } = req.body;
  
    const newBlog = new Blog({
      title,
      thumbnail,
      author,
      readTime,
      description: [
        {
          descTitle: description.descTitle,
          descContent: description.descContent,
          descImage: description.descImage,
        },
      ],
    });
  
    newBlog.save((err, blog) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Error creating blog post' });
      } else {
        res.send({ message: 'Blog post created successfully' });
      }
    });
  });
app.listen(port,()=>{
    console.log("Server is on port "+port);
})