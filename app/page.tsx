import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Websites } from "@/components/websites";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Websites />
      <Experience />
      <Contact />
    </main>
  );
}
