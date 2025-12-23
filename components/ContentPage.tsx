"use client";
import { notFound, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ArrowBigLeftDash } from "lucide-react";
// import guide from "@/constants/guide";
// import locations from "@/constants/locations";
// import blogs from "@/constants/blogs";
import Markdown from 'markdown-to-jsx/react'
import type { data as dataType}  from "@/lib/getdata";



const ContentPage = ({locations,blogs,guide}: {locations: dataType[],blogs: dataType[],guide: dataType[]}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const dataParam = searchParams.get("data");
    const index = parseInt(id || "0");
    const data = decodeURIComponent(dataParam|| "");
    useEffect(() => {
        if (!id || isNaN(index) || id.includes("/") || !data) {
            router.replace("/not-found");
        }
    }, [id, index, data, router]);


    const obj =
        data === "guidepage"
            ? guide[index]
            : data === "locationpage"
                ? locations[index]
                : blogs[index];


    const title = obj?.title||notFound();
    const content = obj.content;
    // const lines = content.split("\n");

    return (
        <main className="scrollbar-hidden mx-4 h-[90vh] overflow-auto pb-10 md:mx-16">
            <section className="w-full items-start max-sm:justify-between md:flex md:h-[10vh]">
                <button
                    className="size-10 cursor-pointer rounded-full max-sm:hidden"
                    onClick={() => history.back()}
                >
                    <ArrowBigLeftDash className="size-12 dark:text-violet-100" />
                </button>
                <h1 className="text-center text-2xl font-bold text-violet-600 md:w-[90%] md:text-4xl">
                    {title}
                </h1>
            </section>
            <Markdown
                options={{
                    overrides: {
                        h1: {
                            props: {
                                className: "text-3xl font-bold mt-6 mb-4 text-violet-600",
                            },
                        },
                        h2: {
                            props: {
                                className: "text-2xl font-semibold mt-5 mb-3 text-violet-500",
                            },
                        },
                        p: {
                            props: {
                                className: "pt-4 text-sm dark:text-violet-200 md:text-lg",
                            },
                        },
                        li: {
                            props: {
                                className: "ml-6 text-sm md:text-lg list-disc dark:text-violet-200",
                            },
                        },
                        a: {
                            props: {
                                className: "text-violet-500 underline",
                                target: "_blank",
                                rel: "noopener noreferrer",
                            },
                        },
                        code: {
                            props: {
                                className:
                                    "rounded bg-gray-900 px-2 py-1 text-sm text-green-400",
                            },
                        },
                    },
                }}
            >
                {content}
            </Markdown>

        </main>
    );
};

export default ContentPage;
