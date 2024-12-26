import React from 'react'
import './Hero_Top.css'
import './Hero_Top_Responsive.css'
import working from '../../../images/illustration-working.svg'

const Hero_Top = () => {
  return (
    <div className="hero_top">

        <div className="content">
            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights 
            on how your links are performing.</p>
            <button>Get Started</button>
        </div>

        <div className="image">
            <img src={working} alt="" />
        </div>
    </div>
  )
}

export default Hero_Top