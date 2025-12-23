"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const MobileNav = ({theme }: { theme: string }) => {
 

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
          className="z-9999 w-[70vw] border-none bg-linear-to-b from-neutral-950 via-violet-950 to-slate-950"
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
              <header className="my-10 flex flex-col items-start font-bold text-violet-300 md:my-0">
                <h1 className="text-2xl">SOLO</h1>
                <h1 className="text-2xl">TRAVELER</h1>
              </header>
            </SheetTitle>
          </SheetHeader>
          <section className="flex h-full w-full flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <div className="flex h-full flex-col gap-6 px-2 text-white">
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
                          "mx-auto flex w-full max-w-60 items-center gap-4 rounded-lg px-6 py-2",
                          {
                            "bg-indigo-700": isActive,
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
          </section>
        </SheetContent>
      </Sheet>
    </main>
  );
};

export default MobileNav;
