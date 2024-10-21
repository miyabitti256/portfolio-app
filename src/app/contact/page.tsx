import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import ContactForm from "./components/contactForm";
import Link from "next/link";

export default function Contact() {
  console.log("a")
  return (
    <div className="container max-w-screen-sm mx-auto">
      <div className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>お問い合わせ</CardTitle>
            <CardDescription>
              フォームまたはSNSでお気軽にお問い合わせください。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="form">
              <TabsList className="w-full">
                <TabsTrigger value="form" className="w-full">
                  フォーム
                </TabsTrigger>
                <TabsTrigger value="sns" className="w-full">
                  SNS
                </TabsTrigger>
              </TabsList>
              <TabsContent value="form">
                <ContactForm />
              </TabsContent>
              <TabsContent value="sns">
                <div className="m-8 grid grid-cols-3 gap-2 place-items-center">
                  <Link href="https://twitter.com/miyabitti256">
                    <FaTwitter className="w-20 h-20" />
                  </Link>
                  <Link href="https://github.com/miyabitti256">
                    <FaGithub className="w-20 h-20" />
                  </Link>
                  <Link href="https://discordapp.com/users/686898398305189891">
                    <FaDiscord className="w-20 h-20" />
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
