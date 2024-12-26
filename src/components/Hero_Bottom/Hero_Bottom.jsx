import React from 'react'
import './Hero_Bottom.css'
import './Hero_Bottom_Responsive.css'

const Hero_Bottom = () => {
  return (
    <div className='hero_bottom'>
      <div className="hero_bottom_txt">
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our
          advanced statistics dashboard.</p>
      </div>

      <div className="hero_bottom_content">
        <div className="blue_line"></div>
        <div className='cards'>
          <div className="card card_1">
            <div className="img img_1"></div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>

          <div className="card card_2">
          <div className="img img_2"></div>
            
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.
            </p>
          </div>

          <div className="card card_3">
            
          <div className="img img_3"></div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.
            </p>
          </div>

          </div>
      </div>
    </div>
  )
}

export default Hero_Bottom