import '../../../styles/components/categories-back.sass'
import { JSX } from 'react'
import { Link } from 'react-router-dom'

export default function CategoriesBack ({ url, linkText = 'Назад' }: PropsCategoriesBack): JSX.Element {
  return (
    <div className="categories-back">
      <div className="categories-back__cont">
        <Link className="categories-back__button" to={url}>← { linkText }</Link>
      </div>
    </div>
  )
}

interface PropsCategoriesBack {
  url: string
  linkText?: string
}
