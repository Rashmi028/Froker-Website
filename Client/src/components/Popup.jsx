import "./popup.css";

export default function Popup({ onClose }) {
    return (
        <div className="popup-container">
            <div className="popup-background"></div>
            <div className="popup-content">
                <center>
                    <div className="popupletter">
                        <div className="close" style={{ cursor: "pointer" }} onClick={onClose}>
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="0"
                                viewBox="0 0 15 15"
                                className="crossimg"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <div className="newsletter">
                            <div className="letterimg">
                                <img
                                    src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706783129/Frokerassets/Group_1171276820_1_hysw5m.jpg"
                                    className="pic"
                                    alt="newsletter popup"
                                />
                            </div>
                            <div className="lettersecond">
                                <div className="staytuned">Stay tuned!</div>
                                <div className="paragraph">
                                    Subscribe to our Newsletter for Exclusive Updates, Tips, and More.
                                </div>
                                <div className="subscribebutton">
                                    <div className="mail">
                                        <input
                                            type="email"
                                            id="email"
                                            name="Email_ID"
                                            placeholder="Enter your email"
                                            required
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                color: "black",
                                                border: "0px",
                                                borderRadius: "20px",
                                                outline: "none",
                                                padding: "0px 20px",
                                            }}
                                        />
                                    </div>
                                    <button type="submit" className="subscribe">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    );
}
