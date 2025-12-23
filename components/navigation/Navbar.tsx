"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Toast from "../Toast";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { sidebarLinks } from "@/constants/sidebarLinks";
import { ModeToggle } from "../ThemeProvider/ThemeButton";
import { useTheme } from "next-themes";


import { cn } from "@/lib/utils";
export default function Navigation() {
  const pathname = usePathname();
  const {theme} = useTheme();


  return (
    <main className="my-3 flex h-[50px] w-screen items-center justify-between px-2 select-none md:my-4 md:h-[100px] md:px-8">
      <figure className="logo max-sm:h-10 max-sm:w-10 md:w-12 md:h-14">
        <Link href={"/"} >
          {/* Light shown by default (server-rendered) */}
          <Image
            src="/logo/st-logo-light.png"
            alt="logo"
            width={1000}
            height={1000}
            className="block dark:hidden w-full h-full"
            priority={true}
          />

          {/* Dark shown when .dark is on <html> (client toggles class) */}
          <Image
            src="/logo/st-logo-dark.png"
            alt="logo"
            width={1000}
            height={1000}
            className="hidden dark:block w-full h-full"
            priority={true}
          />
        </Link>
      </figure>
      <nav className="navigation max-sm:hidden">
        <ul className="flex items-center justify-center text-sm dark:text-violet-300 lg:gap-6 lg:text-lg">
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.url;

            return (
              <Link
                href={item.url}
                key={item.title}
                className={cn(
                  "mx-auto flex w-full max-w-60 items-center rounded-lg px-6 py-2 md:gap-4",
                  {
                    "bg-violet-900": isActive,
                    "text-white": isActive,
                  },
                )}
              >
                <p className="font-semibold">{item.title}</p>
              </Link>
            );
          })}
        </ul>
      </nav>
      <div className="flex justify-center gap-4">

      <Toast
        message="Currently Unavailable"
        title="Sign Up"
        type="info"
        style=" signup px-4 py-2 max-sm:text-xs max-md:text-lg  bg-violet-700 text-violet-100  rounded-full max-sm:hidden cursor-pointer"
        />
        <ModeToggle/>
        </div>
      <MobileNav aria-label="Mobile Navigation" theme={theme||"dark"} />
    </main>
  );
}
