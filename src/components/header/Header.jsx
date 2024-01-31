import Switch from 'react-switch'
import './header.css' 
import { useTheme } from '../../context/useTheme.js'
import {useState} from 'react'

const header = () => {
  const {isDarkTheme ,toggleTheme} = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true)

  const toggleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className = {`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
    {/*block element modifier*/}
    <div className="nav__wrapper container">
      <div className="nav__logo">JaredsLogo</div>
      <ul className={`nav__menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
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
          <a href='#contact'>Contact</a>
        </li>
        <li className="buttoms">
          <label htmlFor="" className='switch'>
            <Switch 
            height={24} 
            width={48} 
            onColor='#4d4d4d'
            offColor='#ccc'
            onChange={toggleTheme}
            checked ={isDarkTheme}
            />
          </label>
          <a href='' className='button'>Hire Me</a>
        </li>
      </ul>
    </div>
    <div className="hamburger-menu" onClick={toggleMobileMenuOpen}>
      <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
    </div>
    </div>
  )
}

export default header