import { JSX } from 'react'
import '../../../styles/components/home.sass'
import { Link } from 'react-router-dom'

export default function Home (): JSX.Element {
  return (
    <div className="home">
      <div className="home__cont">
        <h1 className="home__caption">Тестовое задание «Express-Шина»</h1>
        <ul className="home__list">
          <li className="home__item">
            <span className="home__name">ТЗ:</span>
            <a className="home__link" href="https://docs.google.com/document/d/1xSKSUGqaXGNnsPsj2jLIakhNls6YbAc4iqySHRY0W2k/edit?usp=sharing" target="_blank">docs.google.com</a>
          </li>
          <li className="home__item">
            <span className="home__name">Исполнитель:</span>
            <a className="home__link" href="https://kirov.hh.ru/resume/bb292973ff08dddc000039ed1f566b4d733262" target="_blank">Загумённов Павел Анатольевич</a>
          </li>
        </ul>
        <div className="home__btn-box">
          <Link className="home__button" to="/categories">Смотреть</Link>
        </div>
      </div>
    </div>
  )
}
