// import blogs from '@/constants/blogs'
import { getData } from '@/lib/getPrismaData';
import Link from 'next/link'
import Markdown from 'markdown-to-jsx/react'

const Blog = async () => {
  const blogs = await getData("blogs");
  return (
    <main className="scrollbar-hidden flex flex-col items-center justify-between overflow-auto py-10 select-none">
      <h1 className="text-3xl font-bold text-violet-600">Blog</h1>
      <h3 className="mx-6 my-4 text-center text-sm dark:text-violet-200 max-md:text-xs">
        {" "}
        &#40; Disclaimer :- A solo traveler is a traveler not a tourist so
        this is a guide for solo travelers who want budget friendly and fun
        trips &#41;{" "}
      </h3>

      <section className="mx-auto my-10 flex flex-col w-[80%] justify-center gap-5 px-4 py-2 ">
        {blogs.map((item, index) => (
          <article
            className="relative mb-6  rounded-3xl p-0.5"
            key={index}
          >
            <Link
              href={{
                pathname: "/content",
                query: {
                  data: "blogPage",
                  id: index,
                },
              }}
            >


              <div className="relative z-10 flex flex-col justify-items-center gap-3 rounded-4xl border-2 border-violet-400 p-8 ">
                <h1 className="my-2 flex items-center text-lg font-bold text-violet-500 sm:text-4xl">
                  {item.title}
                </h1>
                <div className="line-clamp-4 text-md wrap-break-word text-ellipsis dark:text-violet-200">
                  <Markdown
                  >
                    {item.content}
                  </Markdown>
                </div>


              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Blog