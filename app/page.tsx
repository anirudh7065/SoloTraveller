import Link from "next/link";
import SwiperSlideshow from "@/components/SwiperSlideshow";
import Markdown from "markdown-to-jsx/react";
import { mussorie } from "@/constants/mussorie_images";
import Image from "next/image";
import { getData } from "@/lib/getdata";
export default async function Home() {
  const blogs = await getData("blogs");
  const guide = await getData("guide");

  return (
    <main className="scrollbar-hidden overflow-auto text-center select-none md:py-2">
      <section className="flex flex-col justify-evenly px-4 sm:flex-row md:my-10 md:items-center">
        <header className="my-10 flex flex-col items-start text-left font-bold dark:text-violet-200 md:my-0 md:px-4">
          <div className="flex">

            <Image
              src="/logo/mobile-logo-light.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-12 h-20 md:w-14 md:h-30 block dark:hidden"
            />

            <Image
              src="/logo/mobile-logo-dark.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-12 h-20 md:w-14 md:h-30 hidden dark:block"
            />

            <div>
              <h1 className="text-4xl md:text-6xl">SOLO</h1>

              <h1 className="text-4xl md:text-6xl">TRAVELER</h1>
            </div>
          </div>
          <h3 className="pt-4 text-xl text-violet-600 md:text-2xl">
            A platform for solo travelers
          </h3>
          <h2 className="text-lg text-violet-400">
            Explore the world on your own
          </h2>
        </header>

        <figure className="mx-auto h-75 w-[97%] overflow-hidden rounded-4xl bg-none md:mx-0 md:h-67.5 md:w-112.5">
          <SwiperSlideshow images={mussorie} />
        </figure>

      </section>

      <section className="flex lg:w-[80vw] max-lg:w-[90vw] mx-auto gap-10  text-left font-bold max-sm:my-10 max-sm:flex-col md:h-75 items-center justify-center ">
        <article className="guide flex h-auto flex-col max-sm:px-4 md:w-[47%]">
          <h1 className="text-2xl text-violet-700 ">Guide</h1>
          <h3 className="my-2 text-violet-500 line-clamp-2">{guide[0].title}</h3>
          <div className="my-2 overflow-hidden dark:text-violet-200 line-clamp-3 ">
            <Markdown
            >
              {guide[0].content}
            </Markdown>
          </div>


          <Link
            href={{
              pathname: "/content",
              query: {
                data: "guidepage",
                id: 0,
              },
            }}
            className="mx-auto my-2 block rounded-full bg-violet-600 px-4 py-2 text-xs text-violet-100"
          >
            Read more
          </Link>
        </article>
        <article className="blog flex flex-col items-start max-sm:px-4 md:w-[47%]">
          <h1 className="text-2xl text-violet-600">Blogs</h1>
          <h3 className="my-2 text-violet-500 line-clamp-2">{blogs[0].title}</h3>
          <div className="my-2 line-clamp-3 overflow-hidden dark:text-violet-200">
            <Markdown
            >
              {blogs[0].content}
            </Markdown>
          </div>
          <Link
            href={{
              pathname: "/content",
              query: {
                data: "blogpage",
                id: 0,
              },
            }}
            className="mx-auto my-2 block rounded-full bg-violet-600 px-4 py-2 text-xs text-violet-100"
          >
            Read more
          </Link>
        </article>
      </section>
    </main>
  );
}
