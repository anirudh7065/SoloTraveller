import { CircleCheckBig, BadgeAlert } from "lucide-react"
const Result = ({ result }:{ result: string }) => {
    return result === "Success" ? (
        <section className="mx-auto my-[10vh] flex h-[250px] flex-col items-center justify-center gap-5 rounded-3xl dark:bg-violet-700 font-bold dark:text-violet-200 md:w-[400px] light:border border-gray-500">
            <CircleCheckBig className="text-green-600 size-14"/>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-extrabold dark:text-shadow-lg/30">Thank You!</h1>
                <h2 className="text-lg font-bold dark:text-shadow-lg/20">For Contacting me</h2>
            </div>
            <h3 className="w-[80%] text-center text-xs dark:text-shadow-lg/30">
                I&apos;ve received your message and will follow up shortly.
            </h3>
        </section>
    ):(
            <section className="mx-auto my-[10vh] flex h-[250px] flex-col items-center justify-center gap-5 rounded-3xl dark:bg-violet-700 font-bold dark:text-violet-200 md:w-[400px] light:border border-gray-500">
                <BadgeAlert className="text-red-500 size-14 "/>
            <div className="text-center">
                    <h1 className="text-3xl font-extrabold dark:text-shadow-lg/30">Sorry for Inconvenience!</h1>
            </div>
            <h3 className="w-[80%] text-center text-lg font-normal text-red-500 dark:text-shadow-lg/20">
                {result}
            </h3>
        </section>
    ) 
}

export default Result
    