import './body2.css'
import React from 'react';
import {Link} from 'react-router-dom'

    export default function BlogPost({ to,href, imgSrc, author, date, title, excerpt }){
    return (
        <a className="booxx" href={href} to={to}>
           
            <div style={{ width: '100%', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '100%',marginRight:'15px', height: '100%', borderRadius: '10px' }}>
                    <img src={imgSrc} alt="pic of blogs" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
                </div>
            </div>
            <div className="autor">by {author} - {date}</div>
            <div className="ins">{title}</div>
            <p className="inside">{excerpt}</p>
            <div className="bottom">Read More...</div>
        
        </a>
    );
};


