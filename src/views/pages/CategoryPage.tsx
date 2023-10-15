import { JSX } from 'react'
import { useLoaderData } from 'react-router-dom'
import { CategoriesForCategoryPage } from '../../scripts/tools/api.ts'
import Categories from '../components/categories/categories.tsx'
import CategoriesBack from '../components/categories/categories-back.tsx'

export default function CategoryPage (): JSX.Element {
  const { category } = useLoaderData() as LoadDataCategoryPage
  return (
    <>
      <CategoriesBack url='/categories'/>
      <Categories caption={category.name} parentUrl={`/${category.slug}`} categories={category.children}/>
    </>
  )
}

interface LoadDataCategoryPage {
  category: CategoriesForCategoryPage
}
