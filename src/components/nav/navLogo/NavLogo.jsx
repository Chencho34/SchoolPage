import logo from '../../../assets/images/logo-2.png'
import logoMobile from '../../../assets/images/logo.png'

export default function NavLogo () {
  const isMobile = window.innerWidth < 530
  return (
    <figure className="nav__content-logo">
      {isMobile ? (
          <img src={logoMobile} className='nav__logo-m'/>
        ) : ( 
          <img src={logo} className='nav__logo'/> 
      )}
    </figure>
  )
}