import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "../app/data/projects"

export default function Projects() {
    return (
        <section id="work" className="py-60 text-gray-800">
            <h2 className="text-4xl font-bold text-center mb-12">Latest Work</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                {projects.map((project: Project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 mb-4">
                                {project.description}
                            </p>

                            <Link
                                href={project.link}
                                className="text-blue-600 font-medium hover:underline"
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}