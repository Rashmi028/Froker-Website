##Blog Website
A full-stack blog website where users can read blog posts, like them, and view detailed content. The website is built using React for the front end and Express with MongoDB for the back end.

Features
View a list of blog posts.
Read individual blog posts with detailed content.
Like blog posts (one like per user).
Responsive and user-friendly interface.
Technologies Used
Frontend: React.js
Backend: Node.js with Express
Database: MongoDB
Styling: CSS
Project Structure
perl
Copy code
my-blog-website/
│
├── client/                # React client application
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── styles/        # CSS files
│   │   └── App.js          # Main React component
│   ├── package.json        # Client dependencies and scripts
│   └── ...
│
├── server/                # Express server application
│   ├── models/            # Mongoose schemas/models
│   ├── routes/            # API routes
│   ├── server.js          # Main server entry point
│   ├── package.json        # Server dependencies and scripts
│   └── ...
│
├── .gitignore              # Git ignore file
└── README.md               # This README file
Screenshots
Homepage

The main page displaying a list of blog posts.

Blog Post Detail

Detailed view of a single blog post including the title, thumbnail, and content.

Like Feature

The like button functionality in action.

Setup Instructions
Prerequisites
Node.js and npm installed
MongoDB running on your local machine or a remote instance
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Set Up the Backend
Navigate to the server directory:

bash
Copy code
cd server
Install the server dependencies:

bash
Copy code
npm install
Create a .env file (if needed) in the server directory and add your MongoDB connection string:

env
Copy code
MONGO_URI=mongodb://localhost:27017/Blog
Start the server:

bash
Copy code
npm start
3. Set Up the Frontend
Navigate to the client directory:

bash
Copy code
cd ../client
Install the client dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
The frontend will be accessible at http://localhost:3000 by default.

Usage
View Blogs: Navigate to the home page to see a list of blog posts.
Read Blogs: Click on a blog title to read the full post.
Like Blogs: Click the like button on a blog post to increase the like count. (One like per user)
API Endpoints
GET /api/blogs/
- Fetch a blog post by ID
POST /api/blogs/
/like - Like a blog post
Contributing
Feel free to fork the repository, make changes, and submit a pull request. For major changes or new features, please open an issue to discuss your proposed changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or feedback, please reach out to your-email@example.com.
