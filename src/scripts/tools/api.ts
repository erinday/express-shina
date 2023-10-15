import request from './request.ts'

export async function getCategoriesForCategoryPage (): Promise<CategoriesForCategoryPage|null> {
  await timeout()
  return await request.get('/catalog.json')
}

export interface CategoriesForCategoryPage {

}

async function timeout () {
  return new Promise(resolve => {
    setTimeout(resolve, 700)
  })
}
