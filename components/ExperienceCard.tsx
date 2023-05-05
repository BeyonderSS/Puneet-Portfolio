import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col justify-center rounded-lg items-center space-y-7 flex-shrink-0 w-96 md:w-[500px] snap-center p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-24 h-24 mt-20 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"

        src={urlFor(experience.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl md:text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-xl md:text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {/* techstack  */}
          {experience.technologies.map((technology) => (
            <img
              src={urlFor(technology.image).url()}
              key={technology._id}
              className="h-8 w-8 rounded-full"
            />
          ))}
        </div>
        <p className=" uppercase py-5 text-sm md:text-lg text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg ">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
