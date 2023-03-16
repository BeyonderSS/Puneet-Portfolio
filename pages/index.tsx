import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* header  */}
      <Header />
      {/* hero  */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* about  */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* experience  */}
      <section id="experience " className="snap-center">
        <WorkExperience />
      </section>
      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects/>
      </section>

      {/* contact Me  */}
      <section className="">
      </section>
    </div>
  );
}
