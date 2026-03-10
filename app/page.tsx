import Image from "next/image";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Herotwo from "../components/skills";
import Projects from "@/components/project";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="p-0 h-200 max-w-auto">
      <Nav />
      <Hero />
      <Herotwo />
      <Projects />
      <Footer />
    </div>
  );
}
