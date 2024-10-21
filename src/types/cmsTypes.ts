interface Image {
  url: string;
  height: number;
  width: number;
}

interface DateInfo {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export interface Category extends DateInfo {
  id: string;
  name: string;
}

export interface Tag extends DateInfo {
  id: string;
  tag: string;
  icon: Image;
}
export interface BlogContent extends DateInfo {
  id: string;
  title: string;
  content: string;
  eyecatch: Image;
  category: Category;
  tag: Tag[];
}

export interface BlogContents {
  contents: BlogContent[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface Categories {
  contents: Category[];
  totalCount: number;
  offset: number;
  limit: number;
}
