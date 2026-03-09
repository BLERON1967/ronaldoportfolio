import Image from "next/image"

export default function Herotwo() {
    return (
        <div className="p-4 pl-30 space-y-20 bg-white w-full h-100 mt-[110]">

            <div className="px-25 flex items-center space-x-40 justify-between h-40 w-310 text-gray-900">
                <div className="h-30 w-300 space-x-3">
                    <div className="relative font-bold text-2xl">Frontend Engineering</div>
                    <div className="w-100 pt-6">I architect and develop scalable frontend systems, building performant and maintainable interfaces using modern frameworks and best practices.</div>
                    <div className="absolute top-159 right-290 rounded-t-full bg-red-400 w-15 h-15"></div>
                    <Image src="/Arrow.png" alt="arrow" width={30} height={40} className="absolute top-164 right-296" />
                </div>
                <div className="h-30 w-300 space-x-3">
                    <div className="relative font-bold text-2xl">UI Architecture & Implementation</div>
                    <div className="w-100 pt-6">I design and implement intuitive user interfaces, ensuring seamless user experiences across various platforms and devices.</div>
                    <div className="absolute top-159 right-140 rounded-tr-full bg-purple-400 w-15 h-15"></div>
                    <Image src="/Arrow.png" alt="arrow" width={50} height={60} className="absolute top-158 right-140" />
                </div>
            </div>

            <div className="px-25 flex items-center space-x-40 justify-between h-40 w-310 text-gray-900">
                <div className="h-30 w-300 space-x-3">
                    <div className="relative font-bold text-2xl">Responsive & Adaptive Design</div>
                    <div className="w-100 pt-6">I engineer interfaces that adapt seamlessly across devices, ensuring optimal usability, layout integrity, and performance on all screen sizes.</div>
                    <div className="absolute top-217 right-290 rounded-tr-4xl rounded-bl-4xl bg-blue-400 w-15 h-15"></div>
                    <Image src="/Arrow.png" alt="arrow" width={50} height={60} className="absolute top-225 right-300" />
                </div>
                <div className="h-30 w-300 space-x-3">
                    <div className="relative font-bold text-2xl">API Integration & Data Handling</div>
                    <div className="w-100 pt-6">I integrate frontend applications with APIs and backend services, managing asynchronous data, state, and error handling to deliver reliable user experiences.</div>
                    <div className="absolute top-217 right-139 rounded-tr-full bg-purple-400 w-15 h-15"></div>
                    <Image src="/Arrow.png" alt="arrow" width={50} height={60} className="absolute top-215 right-139" />
                </div>
            </div>

        </div>
    )
}