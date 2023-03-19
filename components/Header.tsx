import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "@/typings";

type Props = { socials: Social[] };

function Header({ socials }: Props) {
  return (
    <div>
      <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
        {/* Left Section */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center "
        >
          {/* social icons */}
          {socials.map((social) => (
            <SocialIcon
            key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
         
        </motion.div>
        <Link href="#contact">
          {/* Right Section */}
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400  ">
              GET IN TOUCH
            </p>
          </motion.div>
        </Link>
      </header>
    </div>
  );
}

export default Header;
