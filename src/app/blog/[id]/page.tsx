import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getDetailContent } from "@/lib/blogContents";
import { highlightCode } from "@/lib/highlightCode";
import { ChevronsLeft, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const blogContent = await getDetailContent(id);
  const highlightedContent = await highlightCode(blogContent.content);
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        {blogContent.title}
      </h1>
      <div className="flex items-center mb-4">
        <Badge>{blogContent.category.name}</Badge>
        {blogContent.tag && <Tag className="ml-2" />}
        {blogContent?.tag?.map((tag) => (
          <Badge key={tag.id} variant={"outline"} className="ml-1">
            <Image
              src={tag.icon.url}
              alt={tag.tag}
              width={16}
              height={16}
              className="rounded-full mr-2"
            />
            {tag.tag}
          </Badge>
        ))}
      </div>
      <div className="my-4 flex gap-4 text-sm text-gray-700 dark:text-gray-400">
        <p>公開日: {new Date(blogContent.publishedAt).toLocaleDateString()}</p>
        <p>
          最終更新日: {new Date(blogContent.updatedAt).toLocaleDateString()}
        </p>
      </div>
      <div>
        {blogContent?.eyecatch?.url && (
          <Image
            src={blogContent.eyecatch.url}
            alt="アイキャッチ"
            width={1000}
            height={1000}
            className="mb-4"
          />
        )}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: highlightedContent }}
        className="
          prose prose-lg mx-auto
          dark:prose-invert
          prose-a:text-blue-500
          dark:prose-a:text-blue-400
          prose-pre:p-0
          prose-pre:bg-transparent
          prose-code:text-white
          prose-code:p-2
          prose-code:rounded-md
        "
      />
      <div className="flex justify-center mt-4">
        <Link href="/blog">
          <Button variant={"outline"} rounded={"full"}>
            <ChevronsLeft className="mr-2" />
            一覧に戻る
          </Button>
        </Link>
      </div>
    </article>
  );
}
