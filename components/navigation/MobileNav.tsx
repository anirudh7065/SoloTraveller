"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react"


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants/sidebarLinks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";

const MobileNav = () => {
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  return (
    <main className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          {/* <div className="h-[40px] w-[40px] cursor-pointer rounded-full"> */}
          <Menu className="size-10 cursor-pointer rounded-full" />
          {/* </div> */}
        </SheetTrigger>
        <SheetContent
          side="left"
          className="z-9999 w-[70vw] border-none bg-white dark:bg-linear-to-b from-neutral-950 via-violet-950 to-slate-950"
        >
          <SheetHeader className="">
            <SheetTitle
              className="flex items-center px-2"
              aria-description="logo"
            >
              <Image
                src={`/logo/${theme === "dark" ? "mobile-logo-dark.png" : "mobile-logo-light.png"}`}
                alt="logo"
                width={1000}
                height={1000}
                className="w-12 h-14"
              />
              <header className="my-10 flex flex-col items-start font-bold text-black dark:text-violet-300 md:my-0">
                <h1 className="text-2xl">SOLO</h1>
                <h1 className="text-2xl">TRAVELER</h1>
              </header>
            </SheetTitle>
          </SheetHeader>
          <section className="flex h-full w-full flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <div className="flex h-full flex-col gap-6 px-2 dark:text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.url;

                  return (
                    <SheetClose
                      asChild
                      key={item.url}
                      aria-description={`sidebar link ${item.title}`}
                    >
                      <Link
                        href={item.url}
                        key={item.title}
                        className={cn(
                          "mx-auto flex w-full max-w-60 items-center gap-4 rounded-lg px-6 py-2 ",
                          {
                            "bg-violet-500": isActive,
                            "light:text-white": isActive,
                            "dark:text-black": isActive,
                          },
                        )}
                      >
                        <p className="font-semibold">{item.title}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </SheetClose>
            <div className="flex items-center justify-end px-4 py-6">

            <div className={`flex items-center justify-center size-8 border border-violet-300 p-1 rounded-lg ${theme === "light" ? "bg-black" : "bg-white"}`} onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
                {theme === "light"
                  ? <Moon className="size-10 cursor-pointer rounded-full text-white" />
                  : <Sun className="size-10 cursor-pointer rounded-full text-black" />
                }
            </div>
                </div>
          </section>
        </SheetContent>
      </Sheet>
    </main>
  );
};

export default MobileNav;
