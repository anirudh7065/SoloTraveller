import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/navigation/Navbar";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoloTraveller",
  description: "Home Page of SoloTraveller.in",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode ;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable}  h-screen antialiased flex flex-col min-h-screen box-border scrollbar-hidden overflow-auto`}
      >

          <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>

            <Navigation />
            {children}
            <ToastContainer />
          </ThemeProvider>
      </body>
    </html>
  );
}
