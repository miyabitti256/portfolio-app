import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

export async function highlightCode(content: string) {
  const file = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypePrettyCode, {
      theme: "github-dark", // または他のテーマを選択
      keepBackground: true,
    })
    .use(rehypeStringify)
    .process(content);

  return String(file);
}
