import { BlogCard } from "@/components/common/blog-card";
import FadeInScroll from "@/components/common/fade-in-scroll";
import { Button } from "@/components/ui/button";
import { getContents } from "@/lib/blogContents";
import {
  Briefcase,
  ChevronsRight,
  Code,
  Gamepad,
  Layout,
  User,
} from "lucide-react";
import Link from "next/link";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

export async function Contents() {
  const blogContents = await getContents({ offset: 0, limit: 10 });

  return (
    <section className="px-4 md:px-8 py-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 gap-12 relative">
        <FadeInScroll className="md:row-span-full">
          <div className="bg-red-100 border-red-300 border-4 dark:bg-red-900/30 dark:border-red-700/50 p-4 rounded-md relative">
            <div className="absolute -top-9 -left-4 bg-red-300 dark:bg-red-900 p-2 rounded-md text-white text-2xl font-bold flex items-center">
              Blog
              <p className="text-sm ml-2">テックブログ 制作物</p>
            </div>
            <div className="overflow-x-auto overflow-y-auto max-h-[800px] flex flex-col gap-4 custom-scrollbar">
              {blogContents.contents.map((content) => (
                <div
                  key={content.id}
                  className="hover:scale-95 transition-all duration-300"
                >
                  <BlogCard
                    content={content}
                    className="dark:bg-red-900 border-none"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <Link href="/blog">
                <Button variant={"outline"} rounded={"full"}>
                  View More <ChevronsRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeInScroll>
        <FadeInScroll delay={0.1} className="md:row-span-4">
          <div className="bg-blue-100 border-blue-300 border-4 dark:bg-blue-900/30 dark:border-blue-700/50 p-4 rounded-md relative h-full">
            <div className="absolute -top-9 -left-4 bg-blue-300 dark:bg-blue-900 p-2 rounded-md text-white text-2xl font-bold flex items-center">
              About Me
              <p className="text-sm ml-2">わたしについて</p>
            </div>
            <div className="space-y-4 bg-white dark:bg-blue-800/30 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <User className="text-gray-600 dark:text-gray-300" size={20} />
                <span className="font-semibold text-gray-700 dark:text-gray-200 w-28">
                  名前:
                </span>
                <span className="text-gray-800 dark:text-gray-100">
                  miyabitti
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase
                  className="text-gray-600 dark:text-gray-300"
                  size={20}
                />
                <span className="font-semibold text-gray-700 dark:text-gray-200 w-28">
                  職種:
                </span>
                <span className="text-gray-800 dark:text-gray-100">ニート</span>
              </div>
              <div className="flex items-start space-x-3">
                <Gamepad
                  className="text-gray-600 dark:text-gray-300 mt-1"
                  size={20}
                />
                <span className="font-semibold text-gray-700 dark:text-gray-200 w-28">
                  趣味:
                </span>
                <span className="text-gray-800 dark:text-gray-100">
                  ゲーム(FPSがメイン)、アニメ
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Code
                  className="text-gray-600 dark:text-gray-300 mt-1"
                  size={20}
                />
                <span className="font-semibold text-gray-700 dark:text-gray-200 w-28">
                  好きな言語:
                </span>
                <div>
                  <span className="text-gray-800 dark:text-gray-100">
                    JavaScript, TypeScript
                  </span>
                  <br />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    (これしか使えない)
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Layout
                  className="text-gray-600 dark:text-gray-300"
                  size={20}
                />
                <span className="font-semibold text-gray-700 dark:text-gray-200 w-28">
                  好きなフレームワーク:
                </span>
                <span className="text-gray-800 dark:text-gray-100">
                  React, Next.js
                </span>
              </div>
            </div>
            <div className="mt-4 bg-white dark:bg-blue-800/30 p-6 rounded-lg shadow-md">
              <p>はじめまして、miyabittiです。</p>
              <p>Typescriptを主に使用しています。</p>
              <p>フロントエンド(フルスタック)エンジニアを目指しています。</p>
              <p>実務経験はありませんが、少しだけNext.jsが使えます。</p>
              <p>最近はHonoを使用してみたいと思っています。</p>
              <p>もしよければ、お気軽にDMください。</p>
            </div>
            <div className="flex items-center justify-center space-x-3 mt-4">
              <p>各種SNSリンク</p>
              <Link href="https://github.com/miyabitti256">
                <FaGithub className="w-10 h-10 text-gray-500" />
              </Link>
              <Link href="https://twitter.com/miyabitti256">
                <FaTwitter className="w-10 h-10 text-blue-500" />
              </Link>
              <Link href="https://discordapp.com/users/686898398305189891">
                <FaDiscord className="w-10 h-10 text-[#5865F2]" />
              </Link>
            </div>
            <div className="flex justify-center mt-4">
              <Link href="/about-me">
                <Button variant={"outline"} rounded={"full"}>
                  View More <ChevronsRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeInScroll>
        <FadeInScroll className="md:row-span-1">
          <div className="bg-green-100 border-green-300 border-4 dark:bg-green-900/30 dark:border-green-700/50 p-4 rounded-md relative h-full">
            <div className="absolute -top-9 -left-4 bg-green-300 dark:bg-green-900 p-2 rounded-md text-white text-2xl font-bold flex items-center">
              Contact
              <p className="text-sm ml-2">お問い合わせ</p>
            </div>
            <div className="p-2">
              <p>お問い合わせは上記SNSか、下記ボタンよりお願いします。</p>
            </div>
            <div className="flex justify-center mt-4">
              <Link href="/contact">
                <Button variant={"outline"} rounded={"full"}>
                  お問い合わせ <ChevronsRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeInScroll>
      </div>
    </section>
  );
}
