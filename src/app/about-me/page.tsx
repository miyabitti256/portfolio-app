import React from "react";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import { Briefcase, Code, Gamepad, Layout, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Avatar className="w-32 h-32 dark:invert">
              <AvatarImage src="/images/miyabitti.svg" alt="プロフィール画像" />
              <AvatarFallback>miyabitti</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl">About Me</CardTitle>
              <p className="text-xl text-muted-foreground">わたしについて</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
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
              <Layout className="text-gray-600 dark:text-gray-300" size={20} />
              <span className="font-semibold text-gray-700 dark:text-gray-200 w-28">
                好きなフレームワーク:
              </span>
              <span className="text-gray-800 dark:text-gray-100">
                React, Next.js
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>自己紹介</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>はじめまして、miyabittiです。</p>
            <p>Typescriptを主に使用しています。</p>
            <p>フロントエンド(フルスタック)エンジニアを目指しています。</p>
            <p>実務経験はありませんが、少しだけNext.jsが使えます。</p>
            <p>最近はHonoを使用してみたいと思っています。</p>
            <p>もしよければ、お気軽にDMください。</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>スキル</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">プログラミング言語</h3>
              <ul className="list-disc list-inside">
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">フレームワーク</h3>
              <ul className="list-disc list-inside">
                <li>React</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SNSリンク</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/miyabitti256"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://twitter.com/miyabitti256"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://discordapp.com/users/686898398305189891"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
