import { paths } from "../../constants/data"
import { Link } from "react-router-dom"
import logo from '../../assets/images/logo-2.png'
import './Nav.css' 
import { useState } from "react"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'


function NavLogo () {
  return (
    <figure className="nav__content-logo">
      <img src={logo} className='nav__logo'/>
    </figure>
  )
}

// eslint-disable-next-line react/prop-types
function NavItem ({ path, item, isActive, onClick }) {
  return (
    <li
      onClick={onClick}
      className={`${isActive ? 'nav__link--active' : 'nav__link'}`}
    >
      <Link to={path} className="nav__item">{item}</Link>
    </li>
  )
}

function NavItems () {
  const [isActive, setIsActive] = useState();  
  const handleClick = (index) => setIsActive(index)

  return (
    <ul className='nav__links scale-up-center'>
      {
        paths.map(({ path, item }, index) => (
          <NavItem 
            key={index}
            path={path}
            item={item}
            isActive={isActive === index}
            onClick={() => handleClick(index)}
          />
        ))
      }
    </ul>
  )
}

function NavMenu () {
  const [togleMenu, setTogleMenu] = useState(false)
  const handleClick = () => setTogleMenu(!togleMenu)

  return (
    <section className='nav__menu'>
      {
        togleMenu 
          ? <RiCloseLine className="scale-up-center" color='#000000' size={27} onClick={handleClick} />
          : <RiMenu3Line className="scale-up-center" color='#000000' size={27} onClick={handleClick} />
      }
      {
        togleMenu && (
          <section className='nav__menu-content scale-up-center'>
            <ul className="nav__menu-links">
              <li><Link>hola</Link></li>
              <li><Link>hola</Link></li>
              <li><Link>hola</Link></li>
              <li><Link>hola</Link></li>
              <li><Link>hola</Link></li>
              <li><Link>hola</Link></li>
              <li><Link>hola</Link></li>
            </ul>
          </section>
        )
      }
    </section>
  )
}

export default function Nav() {
  return (
    <nav className='nav padding__section'>
      <NavLogo />
      <NavItems /> 
      <NavMenu /> 
    </nav>
  )
}
