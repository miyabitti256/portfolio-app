import ToggleThemeButton from "@/components/common/toggle-theme-button";
import Link from "next/link";
import HeaderNavigation from "./header-navigation";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 shadow-sm dark:border-b dark:border-neutral-800 bg-white dark:bg-neutral-900 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <h1 className="flex items-center gap-2 text-2xl font-bold">
          <Image
            src="/images/miyabitti.svg"
            alt="logo"
            width={100}
            height={100}
            className="dark:invert h-10 w-auto"
          />
          <Link href="/">miyabitti</Link>
        </h1>
        <HeaderNavigation />
        <ToggleThemeButton />
      </div>
    </header>
  );
}
