import { BlogCard } from "@/components/common/blog-card";
import FadeInScroll from "@/components/common/fade-in-scroll";
import renderPagination from "./renderPagination";
import { BlogContent } from "@/types/cmsTypes";
const renderBlogContents = (
  contents: BlogContent[],
  totalPages: number,
  page: number,
  categoryParam: string = ""
) => (
  <div className="p-4 md:p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {contents.map((content, index) => (
        <div key={content.id} className="">
          <FadeInScroll delay={index * 0.04}>
            <BlogCard
              className="hover:scale-95 transition-all duration-300"
              content={content}
            />
          </FadeInScroll>
        </div>
      ))}
    </div>
    {renderPagination(totalPages, page, categoryParam)}
  </div>
);

export default renderBlogContents;
