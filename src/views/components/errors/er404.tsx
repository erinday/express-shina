import '../../../styles/components/er404.sass'
import { JSX } from 'react'
import { Link } from 'react-router-dom'

export default function Er404 (): JSX.Element {
  return (
    <div className="er404">
      <div className="er404__cont">
        <h1 className="er404__caption">Страница не найдена</h1>
        <p className="er404__text">Возможно она перемещена на другое место или удалена</p>
        <div className="er404__btn-box">
          <Link className="er404__button" to="/">На главную</Link>
        </div>
      </div>
    </div>
  )
}
