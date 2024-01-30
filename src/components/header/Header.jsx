import Switch from 'react-switch'
import './header.css' 
import { useTheme } from '../../context/useTheme.js'


const header = () => {
  const {isDarkTheme ,toggleTheme} = useTheme()
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <>
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
    <div className="hamburger-menu">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    </>
  )
}

export default header