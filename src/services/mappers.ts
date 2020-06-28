export const categoriesMapper = (categories: Array<any>) =>
  categories.map(category => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    imgURL: category.image.src,
  }));
