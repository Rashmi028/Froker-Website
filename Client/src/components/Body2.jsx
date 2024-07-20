import React, { useState } from 'react';
import './body2.css';
import BlogPost from './BlogPost';

const blogPosts = [
    {
        href: '/blog/18',
        imgSrc: 'blog18.png',
        author: 'Roshan',
        date: '3 May 2024',
        title: 'Delegating Social Media Tasks ...',
        excerpt: "In today's digital age, maintaining a vibrant social media presence is crucial for businesses and individuals alike. However, the demands of crafting ..."
    },
    {
        href: '/blog/17',
        imgSrc: 'blog17.png',
        author: 'Varshita',
        date: '23 April 2024',
        title: 'Summer Fashion Tips: Dressing ...',
        excerpt: "Summer has arrived, bringing with it the perfect opportunity to shed those heavy layers and embrace the light, breezy vibes of the season. Whether you..."
    },
    {
        href: '/blog/16',
        imgSrc: 'blog16.png',
        author: 'Varshita',
        date: '23 April 2024',
        title: 'Why Brands Should Partner with...',
        excerpt: "In the digital marketing landscape, a powerful alliance is brewing between brands and creators, and it’s transforming the way businesses connect with ..."
    },
    {
        href: '/blog/15',
        imgSrc: 'blog15.png',
        author: 'Varshita',
        date: '20 April 2024',
        title: 'Introducing Meta AI: Your New ...',
        excerpt: "In the fast-evolving landscape of artificial intelligence, Meta AI stands out as a beacon of innovation and progress. Let's delve into the capabilities..."
    },
    {
        href: '/blog/14',
        imgSrc: 'blog14.png',
        author: 'Varshita',
        date: '8 April 2024',
        title: "Bangalore's Weather and Water ...",
        excerpt: "1. The Heatwave Hits Hard Bangalore, the city of gardens, tech hubs, and traffic snarls, is currently simmering like a pot of chai left on the stove f..."
    },
    {
        href: '/blog/13',
        imgSrc: 'blog13.png',
        author: 'Varshita',
        date: '6 April 2024',
        title: 'Why Natural Skin Care is Good ...',
        excerpt: "The Magic of Natural Skin Products: More and more people are choosing natural skin products, and it's easy to see why. These products are made from th..."
    },
    {
        href: '/blog/12',
        imgSrc: 'blog12.png',
        author: 'Abhishek Sairam',
        date: '29 March 2024',
        title: 'Devin, the first AI software ...',
        excerpt: "Introducing Devin, the first AI software engineer: In the realm of artificial intelligence, a groundbreaking innovation has emerged, reshaping the lan..."
    },
    {
        href: '/blog/11',
        imgSrc: 'blog11.png',
        author: 'Varshita',
        date: '21 March 2024',
        title: 'National Creators Award 2024: ...',
        excerpt: "1. The Grand DebutIn a digital landscape teeming with content, a few creators stand out like constellations against the night sky. The National Creato..."
    },
    {
        href: '/blog/10',
        imgSrc: 'blog10.png',
        author: 'Varshita',
        date: '15 March 2024',
        title: 'Recession in India 2024: A Rol...',
        excerpt: "Recession in India 2024: A Rollercoaster Ride with a Dash of Curry: In the throes of a global economic downturn, India finds itself navigating turbule..."
    },
    {
        href: '/blog/9',
        imgSrc: 'blog9.png',
        author: 'Varshitha',
        date: '9 March 2024',
        title: 'Apple Vision Pro: A Cosmic Rev...',
        excerpt: "Imagine a world where productivity meets innovation, and your workspace transcends the ordinary. Welcome to Apple Vision Pro, where the boundaries bet..."
      },
      {
        href: '/blog/8',
        imgSrc: 'blog8.png',
        author: 'Varshita',
        date: '8 March 2024',
        title: 'Where Text Becomes Cinematic M...',
        excerpt: "Remember when you were a kid, and you’d scribble fantastical stories in your diary? Well, OpenAI’s latest creation, Sora, just took that childhood mag..."
      },
      {
        href: '/blog/7',
        imgSrc: 'blog7.png',
        author: 'Varshita',
        date: '3 March 2024',
        title: 'What Is Content Creation, Anyw...',
        excerpt: "So, you've heard the buzz about content creation. Maybe you're intrigued, or perhaps you're just here for the free snacks (don't worry, I won't judge)..."
      },
      {
        href: '/blog/6',
        imgSrc: 'blog6.png',
        author: 'Varshitha',
        date: '3 March 2024',
        title: 'Forbes 30 Under 30 India: Cele...',
        excerpt: "Unconventional Geniuses, Fearless Entrepreneurs, and Creative Mavericks: In a world where innovation is the currency of success, the Forbes 30 Under 3..."
      },
      {
        href: '/blog/5',
        imgSrc: 'blog5.png',
        author: 'Varshita',
        date: '9 Feb 2024',
        title: 'Mastering the Art of Co...',
        excerpt: "Introduction: Welcome to the dynamic world of content creation, where creativity knows no bounds and innovation thrives. Whether you're passionate abo..."
      },
      {
        href: '/blog/4',
        imgSrc: 'blog4.png',
        author: 'Varshita',
        date: '9 Feb 2024',
        title: 'The Slice of History: How Food...',
        excerpt: "Picture this: It’s 1889, and King Umberto and Queen Margherita of Italy are sitting in their royal chambers, stomachs growling. But wait, what’s that?..."
      },
      {
        href: '/blog/3',
        imgSrc: 'blog3.jpg',
        author: 'Varshita',
        date: '9 Feb 2024',
        title: 'A Comprehensive Guide to Desi ...',
        excerpt: "The Plot Thickens: Choosing Your Garden Spot:  So, you've decided to embark on a kitchen garden adventure? Fantastic! First things first—pick your plo..."
      },
      {
        href: '/blog/2',
        imgSrc: 'blog2.png',
        author: 'Varshita',
        date: '9 Feb 2024',
        title: 'Efficient Meal Prep: Time-Savi...',
        excerpt: "Quick and Efficient Meal Prep Strategies Hello, culinary enthusiasts! Let's delve into efficient meal preparation and kitchen hacks designed to stream..."
      },
      {
        href: '/blog/1',
        imgSrc: 'blog1.jpg',
        author: 'Varshita',
        date: '8 Feb 2024',
        title: 'Unlocking the Secrets of Healt...',
        excerpt: "Welcome to the delightful universe of healthy food habits! In this journey, vegetables take center stage, and your taste buds are in for a happy dance..."
      }
];

export default function Body2(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;
    const totalPages = 2;

    // Ensure currentPage is within the totalPages
    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    // Calculate indexes for slicing the posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <section className='Recent-Posts'>
            <div className="body2">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div>
                        <div style={{ textAlign: 'justify', paddingLeft: '1rem', paddingRight: '1rem' }}>
                            <div className="headin">
                                <span>{props.post}</span>
                            </div>
                            <div className="blogss">
                                {currentPosts.map((post, index) => (
                                    <BlogPost
                                        key={index}
                                        href={post.href}
                                        imgSrc={post.imgSrc}
                                        author={post.author}
                                        date={post.date}
                                        title={post.title}
                                        excerpt={post.excerpt}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="pagging">
                        <nav aria-label="pagination navigation" className="MuiPagination-root MuiPagination-outlined css-0">
                            <ul className="MuiPagination-ul css-nhb8h9">
                                <li>
                                    <button 
                                        className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-outlined MuiPaginationItem-circular MuiPaginationItem-previousNext css-f4jy6p" 
                                        tabIndex="0" 
                                        type="button" 
                                        aria-label="Go to previous page" 
                                        onClick={() => handlePageChange(currentPage - 1)} 
                                        disabled={currentPage === 1}
                                    >
                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-lrb33l" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateBeforeIcon">
                                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                                        </svg>
                                    </button>
                                </li>
                                {[1, 2].map((pageNumber) => (
                                    <li key={pageNumber}>
                                        <button 
                                            className={`MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-outlined MuiPaginationItem-circular MuiPaginationItem-page css-f4jy6p ${currentPage === pageNumber ? 'Mui-selected' : ''}`} 
                                            tabIndex="0" 
                                            type="button" 
                                            onClick={() => handlePageChange(pageNumber)}
                                        >
                                            {pageNumber}
                                        </button>
                                    </li>
                                ))}
                                <li>
                                    <button 
                                        className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-outlined MuiPaginationItem-circular MuiPaginationItem-previousNext css-f4jy6p" 
                                        tabIndex="0" 
                                        type="button" 
                                        aria-label="Go to next page" 
                                        onClick={() => handlePageChange(currentPage + 1)} 
                                        disabled={currentPage === totalPages}
                                    >
                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-lrb33l" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateNextIcon">
                                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}