export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Nexora",
        description: "A platform designed to connect business owners and entrepreneurs.",
        image: "/nexora.png",
        link: "https://nexorasite.netlify.app/",
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A modern developer portfolio built with basic html and css.",
        image: "/portfolio.png",
        link: "https://osarunwenseportfolio.netlify.app/",
    },
    {
        id: 3,
        title: "Landing Page",
        description: "Responsive landing page optimized for performance and conversion.",
        image: "/landing.png",
        link: "https://nexoraslandingpage.netlify.app/",
    },
];