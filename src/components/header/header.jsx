import React from 'react'
import './header.css' 

const header = () => {
  return (
    {/*block element modifier*/}
    <div className="nav__wrapper container">
      <div className="nav__logo">JaredsLogo</div>
      <ul className="nav__menu">
        <li className="nav__menu-item">
          <a href='#home'>Home</a>
        </li>
        <li className="nav__menu-item">
          <a href='#services'>Services</a>
        </li>
        <li className="nav__menu-item">
          <a href='#home'>Skill</a>
        </li>
        <li className="nav__menu-item">
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li className="nav__menu-item">
          <a href='#contact'>Contaact</a>
        </li>
      </ul>
    </div>
  )
}

export default header