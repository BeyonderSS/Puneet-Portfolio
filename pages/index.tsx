import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { GetStaticProps } from "next";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchSkills } from "@/utils/fetchSocials";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSkills";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar-track-gray-400/20  scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* header  */}
      <div className="sticky top-0">
        <Header socials = {socials} />
      </div>
      {/* hero  */}
      <section id="hero" className="snap-start">
        <Hero pageInfo = {pageInfo} />
      </section>
      {/* about  */}
      <section id="about" className="snap-center">
        <About pageInfo = {pageInfo}  />
      </section>

      {/* experience  */}
      <section id="experience " className="snap-center">
        <WorkExperience experiences = {experiences} />
      </section>
      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills skills = {skills} />
      </section>

      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects projects ={projects} />
      </section>

      {/* contact Me  */}
      <section className="snap-start">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
};
