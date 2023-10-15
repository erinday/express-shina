import { JSX } from 'react'
import { NavLink } from 'react-router-dom'
import '../../../styles/components/menu.sass'

export default function Menu (): JSX.Element {
  return (
    <div className="menu">
      <div className="menu__cont">
        <nav className="menu__list">
          <NavLink
            className={({ isActive }) => isActive ? 'menu__item menu__item_active' : 'menu__item '}
            to="/categories"
            end
          >
            Категории
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
