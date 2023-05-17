import React, {useState}from 'react';
import './home.css'; 
import { MdLiveTv, MdOutlineWatchLater } from 'react-icons/md';
import { GiBookmarklet } from 'react-icons/gi';
import { FaGraduationCap } from 'react-icons/fa';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value)
  };
  return (
    <div className="home">
      <div className="box">
        <div>
          <h3 className="acc">
            <span>Access curated courses worth</span>
          </h3>
          <h3>
            ₹ <span className="strikethrough">18,500</span> at just
            <span className="n"> ₹99</span> per year!
          </h3>
        </div>
      </div>
      <div className="box1">
        <div className="vertical-item">
          <GiBookmarklet />
          <span className="n">+100</span> Job relevant course
        </div>
        <div className="vertical-item">
          <MdOutlineWatchLater />
          <span className="n">+20,000</span> Hours of content
        </div>
        <div className="vertical-item">
          <MdLiveTv />
          <span className="n">Exclusive</span> webinar access
        </div>
        <div className="vertical-item">
          <FaGraduationCap />
          Scholarship worth <span className="n">₹94,500</span>
        </div>
        <div className="vertical-item">
          <img src="./ADS.png" alt="" />
          <span className="n">Ad-free</span> learning experience
        </div>
      </div>
      <div className="container">
        <div className="box">
          <div className="content">
            <div className="circle">1</div>
            <p className="text">SignUp</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="circle">2</div>
            <p className="text">Subscriber</p>
          </div>
        </div>
        <h5>Select your subscription plan</h5>
        <div className="radio-container">
          <label>
            <input type="radio" name="option" disabled/>
            <div className="value">
              <strong>12 month subscription</strong>
            </div>
            <div className="t">offer expired</div>
            <div className="l">
              <span>Total:</span> <strong>₹99</strong>
              <p>₹8 /mo</p>
            </div>
          </label>
        </div>
        <div className="radio-container" style={{ marginTop: 250 }}    name="option"
           >
          <label>
            <input type="radio" name="option"  value="₹179"
            onChange={handleOptionChange}  />
            <div className="value">
              <strong>12 month subscription</strong>
            </div>
            <div className="t" id="recom">
              Recommended
            </div>
            <div className="l">
              <span>Total:</span> <strong>₹179</strong>
              <p>₹15 /mo</p>
            </div>

      </label>

    </div>
    <div className="radio-container" style={{ marginTop: 350 }}>
      <label>
        <input type="radio" name="option"  value="₹149"
            onChange={handleOptionChange}/>
        <div className="value">
          <strong>6 month subscription</strong>
        </div>
        <div className="l">
          <span>Total:</span> <strong>₹149</strong>
          <p>₹29 /mo</p>
        </div>
      </label>
    </div>
    <div className="radio-container" style={{ marginTop: 450 }}>
      <label>
        <input type="radio"name="option"  value="₹99"
            onChange={handleOptionChange} />
        <div className="value">
          <strong>3 month subscription</strong>
        </div>
        <div className="l">
          <span>Total:</span> <strong>₹99</strong>
          <p>₹33 /mo</p>
        </div>
      </label>
    </div>
    <hr/>
    <div className="subscription-fee">
      <div style={{ textAlign: 'left', marginRight: 50 }}>Subscription fee</div>
      <div style={{ textAlign: 'right', marginLeft: 50 }}><strong>₹18500</strong></div>
    </div>
    <div className="limited">
    <MdOutlineWatchLater />
      <p>Limited time offer <span>-₹18,401</span> </p>
      <p>Offer valid till March 2023</p>
    </div>
    <div className='display'><b>Total</b>(Incl of 18% of GST) <span style={{ textAlign: 'right', marginLeft: 50 }}><strong>{selectedOption}</strong></span></div>
    <div className="button-container">
        <button className="button">Cancel</button>
        <button className="button" id='btn'>Procced to pay</button>
      </div>
      <img src='Frame.png' alt='razor pay' height='40px'  />
  </div>

</div>
);
};

export default Home




