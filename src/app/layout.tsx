import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer";
import ThemeProvider from "@/provider/theme-provider";
import EntranceAnimation from "@/components/common/entrance-animetion";
import ToastProvider from "@/provider/toast-provider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "miyabitti Tech",
  description: "miyabitti Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <EntranceAnimation />
          <ToastProvider />
          <Header />
          <main className="mx-auto max-w-6xl">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
