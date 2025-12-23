"use client";
import { useRouter } from "next/navigation";
import {TriangleAlert} from "lucide-react";

export default function NotFoundPage() {
    const router = useRouter();

    return (
        <main className="flex flex-col h-screen gap-10 items-center justify-center scrollbar-hidden overflow-auto select-none md:py-2">
            <TriangleAlert className="text-violet-400 size-18"/>
            <h1 className="text-violet-400 text-5xl">404 - Page Not Found</h1>
            <h3 className="text-violet-200 text-4xl">Sorry the page you are looking for does not exist</h3>
            <button onClick={router.back} className="p-4 rounded-lg text-violet-200 text-xl border-2 border-violet-300">Go Back</button>
        </main>
    );
}
