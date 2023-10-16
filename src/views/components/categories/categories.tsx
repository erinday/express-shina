import '../../../styles/components/categories.sass'
import { JSX } from 'react'
import { Link } from 'react-router-dom'
import {
  CategoryInterface,
  SecondCategoryInterface, ThirdCategoryInterface,
} from '../../../scripts/tools/api.ts'

export default function Categories ({ caption, parentUrl = '', categories }: PropsCategories ): JSX.Element {
  categories = categories.sort((a, b) => a.name.localeCompare(b.name, 'ru'))
  return (
    <div className="categories">
      <div className="categories__cont">
        <h1 className="categories__caption">{caption}</h1>
        <ul className="categories__list">
          { categories.map((category) => (
            <li className="categories__item" key={ category.id }>
              <Link className="categories__link" to={`/categories${parentUrl}/${category.slug}`}>{ category.name }</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface PropsCategories {
  caption: string
  parentUrl?: string
  categories: CategoryInterface[] | SecondCategoryInterface[] | ThirdCategoryInterface[]
}
