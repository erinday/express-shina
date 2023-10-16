import '../../../styles/components/header.sass'
import { JSX } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header (): JSX.Element {
  return (
    <div className="header">
      <div className="header__cont">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'header__logo header__logo_active' : 'header__logo'}>
          <picture className="header__logo-picture">
            <img className="header__logo-image" src="/images/logo.png" alt=""/>
          </picture>
        </NavLink>
      </div>
    </div>
  )
}
