import { NavItems, NavLogo, NavMenu } from '../nav'
import './Nav.css' 

export default function Nav() {
  return (
    <nav className='nav padding__section'>
      <NavLogo />
      <NavItems /> 
      <NavMenu /> 
    </nav>
  )
}
