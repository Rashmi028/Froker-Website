import { useState } from 'react';
import './newsletter.css';

export default function Newsletter() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <section className='Newsletter-section'>
        <div className="parentletter">
            <div className="newsletter">
                <div className="letterimg">
                    <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1706767740/Frokerassets/OBJECTS_lpey0b.png" className="pic" alt="newsletter" />
                </div>
                <div className="lettersecond">
                    <div className="subscribetonews">
                        Subscribe to our newsletter to get the latest updates and news
                    </div>
                    <div className="subnews">
                        <span>
                            <b>Subscribe</b><br />to our newsletter to get the latest updates and news
                        </span>
                    </div>
                    <div>
                        <form>
                            <div className="subscribebutton">
                                <div className="mail">
                                    <input
                                        type="email"
                                        id="email"
                                        name="Email_ID"
                                        placeholder="Enter your email"
                                        required
                                        value={email}
                                        onChange={handleEmailChange}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            color: 'black',
                                            border: '0px',
                                            borderRadius: '20px',
                                            outline: 'none',
                                            padding: '0px 20px'
                                        }}
                                    />
                                </div>
                                <button type="submit" className="subscribe">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                        </div>
                </div>
                        <div class="maill">
                            <input 
                                type="email" 
                                id="email" 
                                name="Email_ID" 
                                placeholder="Enter your email" 
                                required="" 
                                value="" 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    color: 'black',
                                    border: '0px',
                                    borderRadius: '20px',
                                    outline: 'none',
                                    padding: '0px 20px'
                                }}
                            />
                        </div>
                        <button type="submit" className="subscribee">
                                    Subscribe
                        </button>
                    </div>
                </div>
                </section>
            
    );
}
