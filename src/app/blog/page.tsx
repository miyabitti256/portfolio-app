import {
  getCategories,
  getContents,
  getContentsByCategory,
} from "@/lib/blogContents";
import renderBlogContents from "./components/renderBlogContents";
import FilteringCategory from "./components/filteringCategory";

export default async function Blog({
  searchParams,
}: {
  searchParams: { category: string; page: number };
}) {
  const category = searchParams.category ?? "all";
  const page = searchParams.page ?? 1;
  const limit = 12;
  const offset = (page - 1) * limit;

  let blogContents;
  let categoryParam = "";

  if (category && category !== "all") {
    blogContents = await getContentsByCategory(category, { offset, limit });
    categoryParam = `category=${category}&`;
  } else {
    blogContents = await getContents({ offset, limit });
  }

  const totalPages = Math.ceil(blogContents.totalCount / limit);
  const categories = await getCategories();

  return (
    <div className="min-h-[calc(100vh-77px)] flex flex-col items-center">
      <div className="w-64 mx-auto mt-8">
        <FilteringCategory categories={categories.contents} />
      </div>
      {renderBlogContents(
        blogContents.contents,
        totalPages,
        page,
        categoryParam
      )}
    </div>
  );
}
