import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
import Blog from './models/Blog.js'; // Adjust the path as needed

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Blog', {
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());


    // Configuration
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
      const images=[
        'blog1.jpg',
        'blog2.png',
        'blog3.png',
        'blog4.png',
        'blog5.png',
        'blog6.png',
        'blog7.png',
        'blog8.png',
        'blog9.png',
        'blog10.png',
        'blog11.png',
        'blog12.png',
        'blog13.png',
        'blog14.png',
        'blog15.png',
        'blog16.png',
        'blog17.png',
        'blog18.png',
      ];
      (async function run(){
        for(const image of images){
            const result=await cloudinary.uploader.upload(image);
            console.log(result.secure_url);
        }
      })
    
    
// API endpoint to get a blog by custom ID
app.get('/api/blogs/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
      console.log(`Fetching blog with ID: ${id}`);
      const blog = await Blog.findOne({ id });  // Search for the blog by the custom ID field
      if (!blog) {
        console.log('Blog not found');
        return res.status(404).json({ msg: 'Blog not found' });
      }
      res.json(blog);
    } catch (err) {
      console.error('Error fetching blog:', err);
      res.status(500).send('Server Error');
    }
  });
  // API endpoint to like a blog
app.post('/api/blogs/:id/like', async (req, res) => {
    try {
        const blog = await Blog.findOneAndUpdate(
            { id: parseInt(req.params.id) },
            { $inc: { likes: 1 } },
            { new: true }
        );
        if (!blog) {
            return res.status(404).send('Blog not found');
        }
        res.json(blog);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
