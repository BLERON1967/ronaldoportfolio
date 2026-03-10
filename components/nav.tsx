"use client";

import Link from "next/link";
import Image from "next/image";
import Projects from "./project";


export default function Nav() {
    return (
        <nav className="flex items-center justify-between p-4 px-20 bg-white text-black">
            <div className="flex items-center space-x-5">
                {/* <Image src="/logo.png" alt="logo" width={60} height={60} className="rounded-full" /> */}
                <span className="ml-2 font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Ronaldo.O</span>
            </div>
            <div className="space-x-8">
                <Link href="#about" className="hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-transparent">About</Link>
                <Link href="#work" className="hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-transparent">Work</Link>
                <Link href="#contact" className="hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-transparent">Contact</Link>
            </div>
        </nav>
    )
}