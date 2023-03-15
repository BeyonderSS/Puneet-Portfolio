import React from "react";
import { motion } from "framer-motion";
type Props = { directionLeft?: boolean };

const Skill = (directionLeft: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png"
        className="rounded-full border border-gray-400 object-cover w-20 h-20 xl:h-25 xl:w-25 filter group-hover:grayscale transition duration-300 ease-in-out"
      /> 
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 xl:h-25 xl:w-25 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
