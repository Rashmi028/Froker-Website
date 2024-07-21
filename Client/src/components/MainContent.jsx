import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams to get URL parameters
import './maincontent.css';
import Body2 from './Body2';
import Newsletter from './Newsletter';

export default function MainContent() {
    const { id } = useParams();  // Extract the blog ID from the URL
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/blogs/${id}`)
            .then(response => response.json())
            .then(data => setBlog(data))
            .catch(err => console.error(err));
    }, [id]);  // Fetch blog data when the ID changes

    if (!blog) return <div>Loading...</div>;  // Show loading state while fetching data

    return (
        <div className='body'>
        <div className="completewholebody">
            <div className="childblog">
                <div className="toop">
                    <div>Blog</div>
                    <div style={{ paddingLeft: '0.2rem', paddingRight: '0.2rem' }}>
                        <img src="arrow.svg" alt="arrow" />
                    </div>
                    <div>{blog.Title}</div>
                </div>
                <div className="childArticle">
                    <img src={blog.thumbnail} alt="blog images" />
                    <div className="overlayview"></div>
                    <div className="bannerheading">{blog.Title}</div>
                </div>
                <div className="bydatepublish">
                    <div className="publisherdetails">
                        <div className="by-joanna-wellick">by {blog.author}</div>
                        <div className="timetoread">
                            <svg className="clock" height="1em" width="1em" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 8 14"></polyline>
                            </svg>
                            <div className="_2-minute-read">
                                <span>
                                    <span className="_2-minute-read-span">{blog.readTime.split(' ')[0]} </span>
                                    <span className="_2-minute-read-span2">{blog.readTime.split(' ').slice(1).join(' ')}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="likesection">
                        <div className="popularlikes">
                            <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707285106/Frokerassets/Artboard_ne0yo2.jpg" className="likeimg" alt="unliked icon" />
                        </div>
                        <div className="likecounts">{blog.likes} Likes</div>
                    </div>
                </div>
                <div className="childText">
                    <div className="para1">
                        <br /><b>{blog.Title}</b><br />
                    </div>
                    {blog.description.map((desc, index) => (
                        <div key={index} className="para1">
                            <br />
                            <div>
                                <b>{desc.descTitle}</b><br />
                                {desc.descContent}
                                {desc.descImage && <img src={desc.descImage} alt="description image" className="secondImgart" />}
                            </div>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
            <Body2/>
            <Newsletter/>
        </div>
        </div>
    );
}
