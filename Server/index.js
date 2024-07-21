import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
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
