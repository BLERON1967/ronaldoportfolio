import Image from "next/image";
import Nav from "../component/nav";
import Hero from "../component/hero";
import Herotwo from "../component/skills";
import Projects from "@/component/project";
import Footer from "@/component/footer";

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
