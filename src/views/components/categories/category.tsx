import { Link } from 'react-router-dom'
import { BaseCategory } from '../../../scripts/tools/api.ts'

export default function Category ({ caption, parentUrl = '/', categories }: PropsCategory) {
  categories = categories.sort((a, b) => a.name.localeCompare(b.name, 'ru'))
  return (
    <div className="category">
      <div className="category__cont">
        <h1 className="category__caption">{ caption }</h1>
        <ul className="category__list">
          { categories.map((category) => (
            <li className="category__item" key={ category.id }>
              <Link to={`${parentUrl}/${category.slug}`}>{ category.name }</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface PropsCategory {
  caption: string
  parentUrl: string
  categories: [
    BaseCategory
  ]
}
