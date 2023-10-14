import { NavItem } from '../../nav'
import { paths } from "../../../constants/data";
import { useState } from "react";

export default function NavItems () {
  const [isActive, setIsActive] = useState()
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