import React from 'react'
import './Footer.css'
import './Footer_Responsive.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className='footer_logo'></div>

        <div className="links">
            <p>Features</p>
            <ul>
                <li><a href="#">Link Shortening</a></li>
                <li><a href="#">Branded Links</a></li>
                <li><a href="#">Analytics</a></li>
            </ul>
        </div>
        <div className="links">
        <p>Resources</p>
            <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>
        <div className="links">
        <p>Company</p>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        <div className='footer_social'>
          <a href="#">
          <img src="../../../images/icon-facebook.svg" alt="" />
          </a>
          <a href="#">
          <img src="../../../images/icon-twitter.svg" alt="" />
          </a>
          <a href="#">
          <img src="../../../images/icon-pinterest.svg" alt="" />
          </a>
          <a href="#">
          <img src="../../../images/icon-instagram.svg" alt="" />
          </a>
          
          
          

        </div>

    </div>
  )
}

export default Footer