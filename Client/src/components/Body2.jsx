import './body2.css';
export default function Body2() {
    return (
        <section className='Recent-Posts'>
            <div className="body2">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div>
                        <div style={{ textAlign: 'justify', paddingLeft: '1rem', paddingRight: '1rem' }}>
                            <div className="headin">
                                <span>Recent Posts</span>
                            </div>
                            <div className="blogss">
                                <a className="booxx" href="/blog/18">
                                    <div style={{ width: '100%', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ width: '100%', height: '100%', borderRadius: '10px' }}>
                                            <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1714712971/Screenshot_2024-05-03_103708_dx4yto.png" alt="pic of blogs" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
                                        </div>
                                    </div>
                                    <div className="autor">by Roshan - 3 May 2024</div>
                                    <div className="ins">Delegating Social Media Tasks ...</div>
                                    <p className="inside">In today's digital age, maintaining a vibrant social media presence is crucial for businesses and individuals alike. However, the demands of crafting ...</p>
                                    <div className="bottom">Read More...</div>
                                </a>

                                <a className="booxx" href="/blog/17">
                                    <div style={{ width: '100%', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ width: '100%', height: '100%', borderRadius: '10px' }}>
                                            <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1713875886/Screenshot_2024-04-23_180054_kgdlcs.png" alt="pic of blogs" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
                                        </div>
                                    </div>
                                    <div className="autor">by Varshita - 23 April 2024</div>
                                    <div className="ins">Summer Fashion Tips: Dressing ...</div>
                                    <p className="inside">Summer has arrived, bringing with it the perfect opportunity to shed those heavy layers and embrace the light, breezy vibes of the season. Whether you...</p>
                                    <div className="bottom">Read More...</div>
                                </a>

                                <a className="booxx" href="/blog/16">
                                    <div style={{ width: '100%', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ width: '100%', height: '100%', borderRadius: '10px' }}>
                                            <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1713789871/Screenshot_2024-04-19_160434_fz5d5m.png" alt="pic of blogs" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
                                        </div>
                                    </div>
                                    <div className="autor">by Rahul - 19 April 2024</div>
                                    <div className="ins">The Benefits of Mindfulness...</div>
                                    <p className="inside">In our fast-paced world, finding moments of calm can be challenging. Mindfulness, the practice of being present in the moment, offers numerous...</p>
                                    <div className="bottom">Read More...</div>
                                </a>

                                <a className="booxx" href="/blog/15">
                                    <div style={{ width: '100%', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ width: '100%', height: '100%', borderRadius: '10px' }}>
                                            <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1713699876/Screenshot_2024-04-14_120123_ky0tld.png" alt="pic of blogs" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
                                        </div>
                                    </div>
                                    <div className="autor">by Sneha - 14 April 2024</div>
                                    <div className="ins">Exploring the World of Minimalist...</div>
                                    <p className="inside">Minimalism isn't just a design trend; it's a lifestyle choice that emphasizes simplicity and intentionality. From home decor to fashion, discover how...</p>
                                    <div className="bottom">Read More...</div>
                                </a>

                                <a className="booxx" href="/blog/14">
                                    <div style={{ width: '100%', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ width: '100%', height: '100%', borderRadius: '10px' }}>
                                            <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1713599876/Screenshot_2024-04-10_101010_iuytgj.png" alt="pic of blogs" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
                                        </div>
                                    </div>
                                    <div className="autor">by Aman - 10 April 2024</div>
                                    <div className="ins">The Rise of Eco-Friendly Products...</div>
                                    <p className="inside">As awareness of environmental issues grows, more consumers are turning to eco-friendly products. Learn about the benefits of sustainable living and...</p>
                                    <div className="bottom">Read More...</div>
                                </a>

                                {/* Repeat for other blog posts */}
                                {/* ... */}
                            </div>
                        </div>
                    </div>
                    <div className="pagging">
                        <nav aria-label="pagination navigation" className="MuiPagination-root MuiPagination-outlined css-0">
                            <ul className="MuiPagination-ul css-nhb8h9">
                                <li>
                                    <button className="MuiButtonBase-root Mui-disabled MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-outlined MuiPaginationItem-circular Mui-disabled MuiPaginationItem-previousNext css-f4jy6p" tabIndex="-1" type="button" disabled="" aria-label="Go to previous page">
                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-lrb33l" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateBeforeIcon">
                                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-outlined MuiPaginationItem-circular Mui-selected MuiPaginationItem-page css-f4jy6p" tabIndex="0" type="button" aria-current="true" aria-label="page 1">1<span className="MuiTouchRipple-root css-w0pj6f"></span></button>
                                </li>
                                <li>
                                    <button className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-outlined MuiPaginationItem-circular MuiPaginationItem-page css-f4jy6p" tabIndex="0" type="button" aria-label="Go to page 2">2<span className="MuiTouchRipple-root css-w0pj6f"></span></button>
                                </li>
                                <li>
                                    <button className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-outlined MuiPaginationItem-circular MuiPaginationItem-previousNext css-f4jy6p" tabIndex="0" type="button" aria-label="Go to next page">
                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-lrb33l" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateNextIcon">
                                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
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
