import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const geometricSansSerif = Inter({
    subsets: ["latin"],
    variable: "--font-geometric-sans-serif",
});

export default function hero() {
    return (
        <div id="about" className="flex items-center justify-between p-4 px-22 pr-35 bg-white w-full h-100">
            <div className="text-gray-900 space-y-7">
                <div className="text-2xl font-semibold">
                    Frontend Development | API Integration
                </div>

                <h1 className={`${geometricSansSerif.className} text-6xl font-bold`}> Frontend Developer</h1>
                <div className="w-140 pb-5">I design and build modern web applications using Next.js, TypeScript, and Tailwind CSS, focusing on performance and clean user experiences.</div>
                <Link
                    href="#contact"
                    className="px-12 py-6 font-semibold text-white bg-linear-to-r from-gray-900 to-gray-900 bg-size-[200%] bg-left transition-all duration-[3s] hover:from-blue-500 hover:to-purple-500 hover:bg-right hover:scale-105">Contact</Link>
            </div>

            <div>
                <Image src="/phot.jpg" alt="hero" width={250} height={300} className="rounded-t-full relative mt-20" />
                <div className="absolute bottom-100 right-32 rounded-tr-full bg-purple-500 w-20 h-20"></div>
                <div className="absolute bottom-50 right-90 rounded-tl-4xl rounded-br-4xl bg-blue-500 w-20 h-20"></div>
                <Image src="/Arrow.png" alt="arrow" width={50} height={60} className="absolute bottom-50 right-30 rotate-90" />
            </div>
        </div>
    );
}