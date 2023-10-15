import {
  CategoriesForCategoriesPage,
  getCategoriesForCategoriesPage,
} from '../tools/api.ts'

export default async function categoriesLoader () {
  const categories: CategoriesForCategoriesPage[] = await getCategoriesForCategoriesPage()
  if (!categories.length) throw new Response('', { status: 404, statusText: 'Not Found'})
  return { categories }
}
