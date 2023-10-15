import request from './request.ts'

export async function getCategoriesForCategoryPage (): Promise<CategoriesForCategoryPage[]> {
  await timeout()
  const res = await request.get('/catalog.json')
  if (res) return res.categories
  return []
}

export interface CategoriesForCategoryPage {
  id: number
  name: string
  slug: string
  index: boolean
  children: []
}

async function timeout () {
  return new Promise(resolve => {
    setTimeout(resolve, 700)
  })
}
