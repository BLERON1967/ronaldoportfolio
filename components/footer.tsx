import Contact from "./contact";
import Link from "next/link";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="contact" className="text-gray-800 py-8 w-full">
            <div className="flex justify-between w-full max-w-6xl mx-auto">
                <div className="w-135">
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-700">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                    </p>
                    <div className="flex space-x-6 mt-4">
                        <Link href="https://www.youtube.com/@BLERONTÊCH" className="text-black hover:text-blue-500 transition-colors">
                            <FaYoutube size={24} />
                        </Link>
                        <Link href="https://github.com/BLERON1967" className="text-black hover:text-blue-500 transition-colors">
                            <FaGithub size={24} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/osaigbovo-chisom-8a38ab36bt" className="text-black hover:text-blue-500 transition-colors">
                            <FaLinkedin size={24} />
                        </Link>
                    </div>
                </div>
                <Contact />
            </div>

            <div className="text-center mt-8">
                <p>&copy; {new Date().getFullYear()} Ronaldo.O. All rights reserved.</p>
            </div>
        </footer>
    );
}