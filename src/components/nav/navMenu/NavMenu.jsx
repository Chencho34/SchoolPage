import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link } from "react-router-dom"
import { useState } from "react"
import { paths } from '../../../constants/data'


// eslint-disable-next-line react/prop-types
function NavItemsV1 ({linksClass, linkClass, itemClass }) {
  return(
    <ul className={linksClass}>
      {
        paths.map(({ item, path }) => (
          <li 
            className={linkClass} 
            key={item}>
              <Link className={itemClass} to={path}>{item}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default function NavMenu () {
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
            <NavItemsV1
              linksClass='nav__menu-links'
              linkClass='nav__menu-link'
              itemClass='nav__menu-item'
            />
          </section>
        )
      }
    </section>
  )
}