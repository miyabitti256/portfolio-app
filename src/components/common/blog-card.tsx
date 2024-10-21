import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BlogContent } from "@/types/cmsTypes";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

export const BlogCard = ({
  content,
  className,
}: {
  content: BlogContent;
  className?: string;
}) => {
  return (
    <Link href={`/blog/${content.id}`}>
      <Card className={className}>
        <CardHeader>
          {content?.eyecatch?.url && (
            <Image
              src={content.eyecatch.url}
              alt={content.title}
              width={content.eyecatch.width / 2}
              height={content.eyecatch.height / 2}
              className="w-full h-auto object-cover rounded-md mb-4"
            />
          )}
          <CardTitle>{content.title}</CardTitle>
          <CardDescription className="dark:text-white flex items-center">
            <Badge>{content.category?.name}</Badge>
            <p className="ml-2">
              {new Date(content.publishedAt).toLocaleDateString()}
            </p>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
