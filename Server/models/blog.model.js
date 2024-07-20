import mongoose from "mongoose"
const Blog = mongoose.model('blog', blogSchema);
// Create a new blog post
const newBlogPost = new Blog({
  id: 1,
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

// Save the blog post to the database
newBlogPost.save((err, blog) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Blog post created: ${blog.blogTitle}`);
  }
});


export default Blog;