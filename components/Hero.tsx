import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};
import Link from 'next/link'

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi!, Puneet here",
      "your friendly neighborhood tech geek who just can't stop gaming... ",
      "or coding for that matter",
    ],

    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Enginner
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
       <div className="pt-5"> 
         <Link href="#about">
           <button className="heroButton">About</button>
         </Link>
         <Link href="#experience">
           <button className="heroButton">Experience</button>
         </Link>
         <Link href="#skills">
           <button className="heroButton">Skills</button>
         </Link>
         <Link href="#projects">
           <button className="heroButton">Projects</button>
         </Link>
       </div>
       
      </div>
    </div>
  );
}

export default Hero;