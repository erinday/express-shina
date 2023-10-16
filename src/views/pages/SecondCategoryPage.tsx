import { JSX } from 'react'
import { useLoaderData } from 'react-router-dom'
import { CategoryInterface, SecondCategoryInterface } from '../../scripts/tools/api.ts'
import setHeadMeta from '../../scripts/tools/setHeadMeta.ts'
import CategoriesBack from '../components/categories/categories-back.tsx'
import Categories from '../components/categories/categories.tsx'

export default function SecondCategoryPage (): JSX.Element {
  const { category, secondCategory } = useLoaderData() as LoadDataSecondCategoryPage
  setHeadMeta(secondCategory.name, secondCategory.index)
  return (
    <>
      <CategoriesBack url={`/categories/${category.slug}`} linkText={category.name}/>
      <Categories caption={secondCategory.name} parentUrl={`/${category.slug}/${secondCategory.slug}`} categories={secondCategory.children}/>
    </>
  )
}

interface LoadDataSecondCategoryPage {
  category: CategoryInterface
  secondCategory: SecondCategoryInterface
}
