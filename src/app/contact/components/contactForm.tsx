"use client";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendContactForm } from "@/actions/serverActions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, { message: "名前は必須です" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください" }),
  message: z.string().min(1, { message: "お問い合わせ内容を入力してください" }),
});

export default function ContactForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setIsLoading(true);
    const result = await sendContactForm(data);
    if (result.success) {
      toast.success(result.message);
      router.push("/");
    } else {
      toast.error(result.message);
    }
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-4 flex flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>名前 *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="田中 太郎" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{ required: true }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="your-address@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{ required: true }}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>お問い合わせ内容 *</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="お問い合わせ内容を入力してください"
                    className="resize-none min-h-32"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{ required: true }}
          />
        </div>
        <Button type="submit" className="mt-4 w-full" disabled={isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""}
          送信
        </Button>
      </form>
    </Form>
  );
}
