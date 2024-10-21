"use client";
import { Category } from "@/types/cmsTypes";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function FilteringCategory({
  categories,
}: {
  categories: Category[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(currentCategory);
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    router.push(`/blog?category=${categoryId}&page=1`);
  };

  return (
    <div>
      <Select value={selectedCategory ?? ""} onValueChange={handleCategoryChange}>
        <SelectTrigger>
          <SelectValue placeholder="カテゴリを選択してください" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">すべて</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
