import Link from "next/link"
import Markdown from "markdown-to-jsx/react";
import { getData } from "@/lib/getPrismaData";
// app/blog/layout.tsx
export const dynamic = "force-dynamic";

const Guide = async () => {
  const guide = await getData("guide")
  return (
    <main className="scrollbar-hidden flex flex-col items-center justify-between overflow-auto py-10 select-none">
      <h1 className="text-3xl font-bold text-violet-600">Guide</h1>
      <h3 className="mx-6 my-4 text-center text-sm dark:text-violet-200 max-md:text-xs">
        {" "}
        &#40; Disclaimer :- A solo traveler is a traveler not a tourist so
        this is a guide for solo travelers who want budget friendly and fun
        trips &#41;{" "}
      </h3>

      <section className="mx-auto my-10 grid w-[90%] grid-cols-1 justify-items-center gap-5 px-4 py-2 md:grid-cols-2 lg:grid-cols-3">
        {guide.map((item, index) => (
          <article
            className="relative mb-6 inline-block rounded-3xl p-0.5"
            key={index}
          >

            <div className="relative z-10 grid grid-cols-1 grid-rows-[auto] justify-items-center gap-3 rounded-3xl border-2 border-violet-400  px-6 py-4 max-md:w-[90vw] lg:w-[1fr]">
              <h1 className="my-2 flex items-center text-lg font-bold text-violet-500 sm:text-2xl">
                {item.title}
              </h1>
              <div className="line-clamp-4 text-sm wrap-break-word text-ellipsis dark:text-violet-200">
                <Markdown
                >
                  {item.content}
                </Markdown>
              </div>
              <Link
                href={{
                  pathname: "/content",
                  query: {
                    data: "guidepage",
                    id: index,
                  },
                }}
              >
                <div className="my-2 flex w-full items-center justify-center">
                  <button className="cursor-pointer rounded-full bg-violet-900 px-4 py-2 text-xs text-violet-100">
                    Read More
                  </button>
                </div>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Guide