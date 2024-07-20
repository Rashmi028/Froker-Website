import './footer.css';

export default function Footer() {
  return (
    <section className='Footer-section'>
      <div className='Footer-columns'>
        <div className='column1'>
          <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/black-logo-frokerr-copy-10_pwpomg.jpg" alt="Company Logo" />
        </div>
        <div className='child'>
          <div className='column2'>
            <div className='contact11'>
              <h4>Quicklink</h4>
            </div>
            <div className='row'>
              <span>
                <img className="arr" src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="img" />
              </span>
              <a className='Home' href="/">Home</a>
            </div>
            <div className='row'>
              <span>
                <img className="arr" src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="img" />
              </span>
              <a className='Home' href="/about-us">About us</a>
            </div>
            <div className='row'>
              <span>
                <img className="arr" src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="img" />
              </span>
              <a className='Home' href="/privacy-policy">Privacy policy</a>
            </div>
            <div className='row'>
              <span>
                <img className="arr" src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="img" />
              </span>
              <a className='Home' href="/terms-and-conditions">Terms & Conditions</a>
            </div>
          </div>
          <div className='column3'>
            <div className='contact1'>
              <h4>Contacts</h4>
            </div>
            <div className='address'>
              <span>
                <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Froker/@12.9556403,77.7202612,15z/data=!4m6!3m5!1s0x3bae13d152fd68ed:0x7427946171c830c1!8m2!3d12.9556403!4d77.7202612!16s%2Fg%2F11stskm2hv?entry=ttu">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" color="#F76F32" className="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(247, 111, 50)" }}>
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </span>
              <span className="whitefield-bengaluru-560066">Whitefield, Bengaluru, 560066</span>
            </div>
            <div className="maiil">
              <span>
                <a href="mailto:Support@Froker.In">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#F76F32" className="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(247, 111, 50)" }}>
                    <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
                    <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path>
                  </svg>
                </a>
              </span>
              <span>
                <div className="whitefield-bengaluru-560066">support@froker.in</div>
              </span>
            </div>
            <div className="social-media">
              <a href="https://twitter.com/FrokerSocial" target="_blank" rel="noreferrer">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#F76F32" className="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(247, 111, 50)" }}>
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.502 46.782-104.309 104.309-104.309 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.502 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/frokersocial/" target="_blank" rel="noreferrer">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="#F76F32" className="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(247, 111, 50)" }}>
                  <path d="M100.28 448H7.4V149.53h92.78zm-46.33-336C24.12 112 0 87.42 0 58.67A53.66 53.66 0 0153.67 5a53.66 53.66 0 0153.65 53.67c0 28.75-24.12 53.33-53.37 53.33zM447.9 448h-92.4V302.4c0-34.7-.7-79.24-48.29-79.24-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V149.53h89.15v40.78h1.3c12.4-23.5 42.6-48.3 87.6-48.3 93.6 0 110.8 61.7 110.8 141.9V448z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/frokersocial" target="_blank" rel="noreferrer">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" color="#F76F32" className="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(247, 111, 50)" }}>
                  <path d="M279.14 288l14.22-92.66h-88.91V141.09c0-25.35 12.42-50.06 52.24-50.06H293V6.26S273.43 0 248.36 0c-73.22 0-121.06 44.38-121.06 124.72v70.62H64v92.66h63.3V512h97.2V288z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/frokersocial/" target="_blank" rel="noreferrer">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="#F76F32" className="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(247, 111, 50)" }}>
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-92.6S378.1 33 342.4 31.3c-35.8-2.1-143.2-2.1-179 0-35.7 1.7-67.3 9.9-92.6 36.2s-34.5 56.9-36.2 92.6c-2.1 35.8-2.1 143.2 0 179 1.7 35.7 9.9 67.3 36.2 92.6s56.9 34.5 92.6 36.2c35.8 2.1 143.2 2.1 179 0 35.7-1.7 67.3-9.9 92.6-36.2s34.5-56.9 36.2-92.6c2.1-35.8 2.1-143.2 0-179zm-48.5 218.7c-7.8 19.7-22.9 35.3-42.6 42.6-29.5 11.7-99.5 9-132.5 9s-103 .2-132.5-9c-19.7-7.8-35.3-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.5s-.2-103 9-132.5c7.8-19.7 22.9-35.3 42.6-42.6 29.5-11.7 99.5-9 132.5-9s103-.2 132.5 9c19.7 7.8 35.3 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.5s2.6 103-9.1 132.5z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/@frokerofficial" target="_blank" rel="noreferrer">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#F76F32" className="som" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(247, 111, 50)"}}><path d="M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z"></path></svg></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
