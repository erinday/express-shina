import '../../../styles/components/categories.sass'
import { JSX } from 'react'
import { Link } from 'react-router-dom'
import { CategoriesForCategoryPage } from '../../../scripts/tools/api.ts'

export default function Categories ({ categories }: PropsCategories ): JSX.Element {
  return (
    <div className="categories">
      <div className="categories__cont">
        <h1 className="categories__caption">Категории</h1>
        <ul className="categories__list">
          { categories.map((category: CategoriesForCategoryPage) => (
            <li className="categories__item" key={ category.id }>
              <Link className="categories__link" to={`/categories/${category.slug}`}>{ category.name }</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface PropsCategories {
  categories: CategoriesForCategoryPage[]
}
