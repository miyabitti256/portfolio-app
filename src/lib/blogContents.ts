import cmsClient from "./cmsClient";
import { BlogContent, BlogContents, Categories, Category } from "@/types/cmsTypes";

export const getContents = async ({
  offset = 0,
  limit = 10,
}: {
  offset: number;
  limit: number;
}): Promise<BlogContents> => {
  const data = await cmsClient.get({
    endpoint: "blogs",
    queries: {
      offset,
      limit,
    },
  });
  return data;
};

export const getContentsByCategory = async (
  category: string,
  { offset = 0, limit = 10 }: { offset: number; limit: number }
): Promise<BlogContents> => {
  const data = await cmsClient.get({
    endpoint: "blogs",
    queries: {
      filters: `category[equals]${category}`,
      offset,
      limit,
    },
  });
  return data;
};

export const getDetailContent = async (id: string): Promise<BlogContent> => {
  const data = await cmsClient.get({
    endpoint: "blogs",
    contentId: id,
  });
  return data;
};

export const getCategories = async (): Promise<Categories> => {
  const data = await cmsClient.get({
    endpoint: "categories",
  });
  return data;
};
