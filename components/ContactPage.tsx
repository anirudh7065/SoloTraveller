"use client"

import { useState } from "react";
import { contacts } from "@/constants/contacts";
import Result from "./result/Result";
import Link from "next/link";
import Image from "next/image";
import validateForm from "@/lib/validateForm";
import { useTheme } from "next-themes";

type data = {
    username: string;
    email: string;
    message: string;
    subject?: string;
    access_key?: string;
}
const ContactPage = () => {
    const [result, setResult] = useState("");
    const [clicked, setClicked] = useState(false);
    const [errors, setErrors] = useState<data>({ username: "", email: "", message: "" });
    const {theme} = useTheme();

    

    const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (clicked) return; // ✅ prevent double submit
        setClicked(true);

        const form = event.currentTarget;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData) as data;

        // ✅ Client-side validation
        const validationErrors = validateForm(data);
        setErrors(validationErrors);

        if (Object.values(validationErrors).some((error) => error !== "")) {
            setClicked(false);
            return;
        }

        try {
            const response = await fetch("/api/formSubmit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data), // includes honeypot field automatically
            });

            // ✅ Handle rate-limit
            if (response.status === 429) {
                setResult("Too many requests. Please wait and try again.");
                return;
            }

            const result = await response.json();

            if (response.ok && result.success) {
                setResult("Success");
                form.reset();
            } else {
                setResult(result.error || "Error sending message");
            }
        } catch (err) {
            console.error("FORM_SUBMIT_ERROR:", err);
            setResult("Network error. Please try again.");
        } finally {
            setClicked(false); // ✅ always reset
        }
    };


    return (
        <main className="scrollbar-hidden overflow-auto px-4 select-none">
            {result && <Result result={result} /> || (
                <>
                    <header className="my-2 flex flex-col items-start justify-center font-bold dark:text-violet-200 max-sm:h-[30vh] max-sm:px-2 sm:h-[25vh] md:px-12 md:py-5 lg:h-[35vh] lg:px-14">
                        <div className="flex my-4">
                       
                                   <Image
                                src={`/logo/${theme === "dark" ? "mobile-logo-dark.png" : "mobile-logo-light.png"}`}
                                     alt="logo"
                                     width={1000}
                                     height={1000}
                                     className="w-12 h-20 md:w-14 md:h-30"
                                   />
                                   <div>
                                     <h1 className="text-4xl md:text-6xl">SOLO</h1>
                       
                                     <h1 className="text-4xl md:text-6xl">TRAVELER</h1>
                                   </div>
                                 </div>
                        <h3 className="text-2xl text-violet-600 md:text-2xl">
                            Contact Us
                        </h3>
                        <h2 className="text-xl text-violet-400">
                            Get in touch with us for any questions
                        </h2>
                    </header>

                    <section className="mx-auto mb-10 flex h-auto w-[90vw] flex-col gap-5 md:flex-row">
                        {/* Contact Form */}
                        <article className="form rounded-3xl dark:bg-dark-2 p-4 backdrop-blur-xl md:w-[400px] lg:w-[500px] light:shadow-2xl light:border border-gray-500">
                            <form
                                onSubmit={handleClick}
                                className="flex h-full w-full flex-col "
                            >
                                <h1 className="my-2 p-2 text-2xl font-bold max-sm:text-center">
                                    Contact Us
                                </h1>

                                <input
                                    type="text"
                                    autoComplete="name"
                                    name="username"
                                    placeholder="Name"
                                    className={`input mx-auto w-[97%] rounded-xl dark:bg-input-1 p-2 dark:placeholder-gray-300 placeholder:text-black outline-none light:border border-gray-500  ${errors.username ? "border border-red-500 text-red-500" : ""
                                        }`}
                                />
                                {errors.username && (
                                    <p className="px-4 text-sm text-red-500">{errors.username}</p>
                                )}

                                <input
                                    type="email"
                                    autoComplete="email"
                                    name="email"
                                    placeholder="Email"
                                    className={`input mx-auto mt-4 w-[97%] rounded-xl dark:bg-input-1 p-2 dark:text-white dark:placeholder-gray-300 placeholder:text-black light:border border-gray-500 outline-none ${errors.email ? "border border-red-500 text-red-500" : ""
                                        }`}
                                />
                                {errors.email && (
                                    <p className="px-4 text-sm text-red-500">{errors.email}</p>
                                )}

                                <textarea
                                    name="message"
                                    rows={3}
                                    placeholder="Message"
                                    className={`input mx-auto mt-4 light:border border-gray-500 min-h-[100px] w-[97%] resize-none rounded-xl dark:bg-input-1 p-2 dark:text-white dark:placeholder-gray-300 placeholder:text-black outline-none  ${errors.message ? "border border-red-500 text-red-500" : ""
                                        }`}
                                />
                                {errors.message && (
                                    <p className="px-4 text-sm text-red-500">{errors.message}</p>
                                )}
                                <input
                                    type="text"
                                    name="company"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    style={{ display: "none" }}
                                />


                                {clicked ? (
                                    <figure className="mx-auto my-4 flex h-[50px] w-[97%] items-center justify-center rounded-xl bg-purple-1 p-2">
                                        <Image
                                            src="/logo/1495.gif"
                                            width={40}
                                            height={40}
                                            alt="loading"
                                        />
                                    </figure>
                                ) : (
                                    <input
                                        type="submit"
                                        value="Submit"
                                        className="input mx-auto my-2.5 w-[97%] text-violet-100 cursor-pointer rounded-xl bg-purple-1 p-2"
                                    />
                                )}
                            </form>
                        </article>

                        {/* Contact Info */}
                        <section className="info h-[220px] rounded-3xl dark:bg-dark-2 px-4 py-2 backdrop-blur-xl select-none max-sm:mb-[50px] md:w-[350px] lg:w-[350px] light:shadow-xl light:border border-gray-500">
                            <h1 className="my-2 p-2 text-2xl font-bold text-purple-1 max-sm:text-center">
                                Contact Information
                                </h1>
                                {
                                contacts.map(({title,icon,link}, index) => (      
                                        <Link key={index} href={link} target="_blank" className="flex gap-4 items-center justify-start cursor-pointer p-2 text-lg dark:text-violet-400 select-none"> 
                                            {icon }
                                            {title}    
                                        </Link>
 
                                ))
                                }
                        </section>
                    </section>
                </>
            )}
        </main>
    );
};

export default ContactPage;
