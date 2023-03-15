import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = (directionLeft: Props) => {
  return (
    <div className=" group relative flex cursor-pointer">
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
          y: 0,
        }}
        src="https://www.vhv.rs/dpng/d/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png"
        className="rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-25 xl:h-25 filter"

      />
    </div>
  );
};

export default Skill;
