import { JSX } from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/components/categories-back.sass'

export default function CategoriesBack ({ url }: PropsCategoriesBack): JSX.Element {
  return (
    <div className="categories-back">
      <div className="categories-back__cont">
        <Link className="categories-back__button" to={url}>← Назад</Link>
      </div>
    </div>
  )
}

interface PropsCategoriesBack {
  url: string
}