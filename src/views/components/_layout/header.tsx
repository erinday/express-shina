import { JSX } from 'react'
import { NavLink } from 'react-router-dom'
import '../../../styles/components/header.sass'

export default function Header (): JSX.Element {
  return (
    <div className="header">
      <div className="header__cont">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'header__logo' : 'header__logo header__logo_active' }>
          <picture className="header__logo-picture">
            <img className="header__logo-image" src="/images/logo.png" alt=""/>
          </picture>
        </NavLink>
      </div>
    </div>
  )
}
