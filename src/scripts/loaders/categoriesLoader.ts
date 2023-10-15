import {
  BaseCategory,
  getCategoriesForCategoriesPage,
} from '../tools/api.ts'

export default async function categoriesLoader () {
  const categories: BaseCategory[] = await getCategoriesForCategoriesPage()
  if (!categories.length) throw new Response('', { status: 404, statusText: 'Not Found'})
  return { categories }
}
