import request from './request.ts'

export interface BaseCategory {
  id: number
  name: string
  slug: string
  index: boolean
}

export async function getCategoriesForCategoriesPage (): Promise<CategoriesForCategoriesPage[]> {
  await timeout()
  const res: { categories: CategoriesForCategoriesPage[] } | null = await request.get('/catalog.json')
  if (res) return res.categories
  return []
}

export interface CategoriesForCategoriesPage extends BaseCategory {}

export async function getCategoryAndSubcategoriesForCategoryPage (categorySlug: string) {
  await timeout()
  const res: { categories: CategoriesForCategoryPage[] } | null = await request.get('/catalog.json')
  if (!res) return null
  const category = res.categories.find((item) => {
    if (item.slug === categorySlug) return item
  })
  if (category) return category
}

export interface CategoriesForCategoryPage extends BaseCategory {
  children: [
    BaseCategory
  ]
}

async function timeout () {
  return new Promise(resolve => {
    setTimeout(resolve, 700)
  })
}
