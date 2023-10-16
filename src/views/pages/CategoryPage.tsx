import { JSX } from 'react'
import { useLoaderData } from 'react-router-dom'
import Categories from '../components/categories/categories.tsx'
import CategoriesBack from '../components/categories/categories-back.tsx'
import { CategoryInterface } from '../../scripts/tools/api.ts'
import setHeadMeta from '../../scripts/tools/setHeadMeta.ts'

export default function CategoryPage (): JSX.Element {
  const { category } = useLoaderData() as LoadDataCategoryPage
  setHeadMeta(category.name)
  return (
    <>
      <CategoriesBack url='/categories' linkText="Все категории"/>
      <Categories caption={category.name} parentUrl={`/${category.slug}`} categories={ category.children }/>
    </>
  )
}

interface LoadDataCategoryPage {
  category: CategoryInterface
}
