import React, { useState } from 'react'
import './Navbar.css'
import './Navbar_Responsive.css'
import logo from '../../../images/logo.svg'
import menu_icon from '../../../images/menu.svg'


const Navbar = () => {

  const [menu, setMenu] = useState("none")

  const handleMenu = () => {
    menu == "none" ? setMenu("flex") : setMenu("none")
    console.log(menu)
  }

  return (

    <div className="nav">

      <div className='menu'>
        <img src={logo} alt="" />
        <img src={menu_icon} alt="" onClick={handleMenu}/>
      </div>
      <div className="navbar" style={{display:menu}}>

        <div className="nav_tabs">
          <img src={logo} alt="" />
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Resources</a>
        </div>
        <div className="btns">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>

    </div>

  )
}

export default Navbar