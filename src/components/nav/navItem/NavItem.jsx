import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function NavItem ({ path, item, isActive, onClick }) {
  return (
    <li
      onClick={onClick}
      className={
        `${isActive ? 'nav__link--active' : 'nav__link'}`
      }
    >
      <Link to={path} className="nav__item">{item}</Link>
    </li>
  )
}