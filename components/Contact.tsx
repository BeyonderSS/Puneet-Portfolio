import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "@/typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {pageInfo : PageInfo};

function Contact({pageInfo}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ssbeyonder@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name},${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-3xl justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-40">
        <h4 className="md:text-4xl text-lg  font-semibold text-center">
          I Have Got Just What You Need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-1 justify-center">
            <PhoneIcon className=" h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-l">+917869088589</p>
          </div>
          <div className="flex items-center space-x-1 justify-center">
            <EnvelopeIcon className=" h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-l">{pageInfo.email}</p>
          </div>
          <div className="hidden md:flex items-center space-x-1 justify-center">
            <MapPinIcon className=" h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-l ">{pageInfo.address}</p>
          </div>
        </div>
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 md:w-auto w-96 mx-auto"
        >
          <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 md:space-x-2">
            <input  {...register("name")} placeholder="Name" className="contactInput" type="text" />
            <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
          </div>
          <input   {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
          <textarea    {...register("message")} placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#f7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
