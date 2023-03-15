import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }} 
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[450px] "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          Background
        </h4>
        <p className="text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          ipsa harum natus aperiam magni unde a sunt ut, voluptate molestiae
          quisquam, doloremque rerum assumenda error voluptatum quos iure!
          Commodi magni sint minus cumque temporibus odio non ea, molestiae
          libero? Mollitia, hic similique fuga voluptatum quisquam veniam
          suscipit earum expedita laborum molestiae ducimus, minus modi!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
