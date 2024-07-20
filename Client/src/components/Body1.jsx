import './body1.css';

export default function Blog1() {
    return (
        <section className="Froker-Blog">
            <div className="body1">
                <div>
                    <title>Blog page</title>
                    <center style={{ textAlign: "justify", paddingLeft: "1rem", paddingRight: "1rem" }}>
                        <div>
                            <div className="froker-blog">
                                <span>
                                    <span className="froker-blog-span">FROKER </span>
                                    <span className="froker-blog-span2"></span>
                                    <span className="froker-blog-span3">BLOG</span>
                                </span>
                            </div>
                            <center>
                                <div className="sub">Articles covering the most recent <br />updates and advancements</div>
                            </center>
                        </div>
                        <div className="blogs">
                            <a className="boox1" href="/blog/5">
                                <div className="subboox">
                                    <img
                                        src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707379910/Frokerassets/blog5creator_wpwvki.png"
                                        alt="pic of blogs"
                                        className="blogimg1"
                                        style={{ borderRadius: "20px" }}
                                    />
                                </div>
                                <div className="autor">by Varshita - 9 Feb 2024</div>
                                <div className="ins">Title: Mastering the Art of Co...</div>
                                <p className="inside">Introduction: Welcome to the dynamic world of content creation, where creativity...</p>
                                <div className="bottom">Read More...</div>
                            </a>
                            <div className="sideblog">
                                <a className="boox2" href="/blog/7">
                                    <div className="subbboox">
                                        <img
                                            src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709878252/cc5_cye3u1.png"
                                            alt="pic of blogs"
                                            className="blogimg2"
                                        />
                                    </div>
                                    <div className="side">
                                        <div className="autor">by Varshita - 3 March 2024</div>
                                        <div className="ins">What Is Content Creation, Anyw...</div>
                                        <p className="inside">So, you've heard the buzz about content creation. ...</p>
                                        <div className="bottom">Read More...</div>
                                    </div>
                                </a>
                                <a className="boox2" href="/blog/6">
                                    <div className="subbboox">
                                        <img
                                            src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png"
                                            alt="pic of blogs"
                                            className="blogimg2"
                                        />
                                    </div>
                                    <div className="side">
                                        <div className="autor">by Varshitha - 3 March 2024</div>
                                        <div className="ins">Forbes 30 Under 30 India: Cele...</div>
                                        <p className="inside">Unconventional Geniuses, Fearless Entrepreneurs, a...</p>
                                        <div className="bottom">Read More...</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </section>
    );
}
