import Link from 'next/link'
import { fetchData } from '@/lib/supabase/db';
import Loader from '@/components/loader';
import Image from 'next/image'
// app/blog/layout.tsx
export const dynamic = "force-dynamic";



const Locations = async () => {
  const locations = await fetchData("locations");
  return (
    <main className="scrollbar-hidden flex flex-col items-center justify-between overflow-auto py-10 select-none">
      <h1 className='text-3xl font-bold text-violet-600'>Locations</h1>
      <h3 className="mx-6 my-4 text-center text-sm dark:text-violet-200 max-md:text-xs">
        {" "}
        &#40; Disclaimer :- This website is in development stage and have minimum locations as i want to recommend places that i have visited for now it will be updated soon &#41;{" "}
      </h3>
      {(locations.length === 0) ? (
        <Loader />
      ) : (
        
        <section className="mx-auto my-10 grid w-[90%] grid-cols-1 justify-items-center gap-5 px-4 py-2 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((data, index) => (
          <article
            className="relative inline-block rounded-3xl p-0.5  overflow-hidden w-[1fr] max-h-66"
            key={index}
          >
            <Link
              href={{
                pathname: "/content",
                query: {
                  data: "locationpage",
                  id: index,
                },
              }}
              className='size-full overflow-hidden'
            >
              <Image src={data.image || "#"} alt={data.title} width={1000} height={1000} className=' object-cover h-full' />

              <h1 className="px-4 flex items-center text-4xl text-white text-shadow-lg/90 font-bold  absolute bottom-3   z-1000  w-full text-left">
                {data.title}
              </h1>

            </Link>
          </article>
        ))}
      </section>
  )}
    </main>
  )
}

export default Locations