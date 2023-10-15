import {
  CategoriesForCategoryPage,
  getCategoriesForCategoryPage,
} from '../tools/api.ts'

export async function categoriesLoader () {
  const categories: CategoriesForCategoryPage | null = await getCategoriesForCategoryPage()
  if (!categories) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    })
  }
  return { categories }
}
