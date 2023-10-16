import request from './request.ts'

export async function getCategoriesForCategoriesPage (): Promise<CategoryInterface[]> {
  await timeout(400)
  const res: ResponseInterface | null = await request.get('/catalog.json')
  if (res) return res.categories
  return []
}

export async function getCategoryForCategoryPage (categorySlug?: string): Promise<CategoryInterface|undefined> {
  if (!categorySlug) return
  await timeout(700)
  const res: ResponseInterface | null = await request.get('/catalog.json')
  if (!res) return
  const category = res.categories.find((item: CategoryInterface) => {
    if (item.slug === categorySlug) return item
  })
  if (category) return category
}

export async function getDataForSecondCategoryPage (categorySlug?: string, secondCategorySlug?: string): Promise<ResponseGetDataForSecondCategoryPage|undefined> {
  if (!categorySlug || !secondCategorySlug) return
  await timeout(300)
  const res: ResponseInterface | null = await request.get('/catalog.json')
  if (!res) return
  const category = res.categories.find((item) => {
    if (item.slug === categorySlug) return item
  })
  if (!category) return
  const secondCategory = category.children.find((item) => {
    if (item.slug === secondCategorySlug) return item
  })
  if (!secondCategory) return
  return {
    category,
    secondCategory
  }
}

interface ResponseGetDataForSecondCategoryPage {
  category: CategoryInterface
  secondCategory: SecondCategoryInterface
}

interface ResponseInterface {
  categories: Array<CategoryInterface>
}

export interface CategoryInterface {
  id: number
  name: string
  slug: string
  index: boolean
  children: Array<SecondCategoryInterface>
}

export interface SecondCategoryInterface {
  id: number
  name: string
  slug: string
  index: boolean
  children: Array<ThirdCategoryInterface>
}

export interface ThirdCategoryInterface {
  id: number
  name: string
  slug: string
  index: boolean
}

async function timeout (time = 700) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
