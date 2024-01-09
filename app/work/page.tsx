import React from "react";
import { BsDiscord } from "react-icons/bs";
import {
  FaGamepad,
  FaGlobe,
  FaLaptop,
  FaLightbulb,
  FaPen,
  FaUser,
} from "react-icons/fa";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center p-6 space-y-8">
      <h1 className="text-5xl font-bold gradient">Good Choice!</h1>

      <div className="grid grid-cols-1  items-center justify-items-center justify-center md:grid-cols-3 gap-2 xl:grid-cols-5">
        <div className="xl:block hidden" />
        <div className="flex h-full flex-col w-full p-2 bg-white gap-2 items-center text-center bg-opacity-10 rounded-lg flex-1 justify-around">
          <FaGamepad className="text-4xl" />
          <p> Are you passionate about gaming and technology?</p>
        </div>
        <div className="flex h-full w-full flex-col p-2 bg-white gap-2 items-center text-center bg-opacity-10 rounded-lg flex-1 justify-around">
          <FaPen className="text-4xl" />
          <p>Do you have a flair for storytelling?</p>
        </div>

        <div className="flex h-full w-full flex-col p-2 bg-white gap-2 items-center text-center bg-opacity-10 rounded-lg flex-1 justify-around">
          <FaLaptop className="text-4xl" />
          <p>Would you like to explore gaming and tech blogging.</p>
        </div>
        <div className="xl:block hidden" />
      </div>
      <p className="text-3xl font-extrabold  max-w-lg text-center">
        If so, join us!
      </p>
      <p className="text-xl font-bod">We&apos;re looking for:</p>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-full p-2 gap-2 text-center items-center flex flex-col max-w-md bg-white bg-opacity-10 shadow-lg rounded-lg overflow-hidden">
          <h2 className="text-2xl font-semibold">Writers</h2>

          <p className="px-5">
            We&apos;re always looking for talented writers to create engaging
            and unique game tales. Apply now and start earning GTC.
          </p>

          <a
            className="bg-white w-1/2 bg-opacity-10 hover:bg-opacity-20 bg-none transition-all ease-in-out duration-300 text-white font-bold py-2 px-4 rounded"
            href="/apply?position=writer"
          >
            Apply Now
          </a>
        </div>
        <div className="w-full p-2 gap-2 text-center items-center flex flex-col max-w-md bg-white bg-opacity-10 shadow-lg rounded-lg overflow-hidden">
          <h2 className="text-2xl font-semibold">Social Media Marketers</h2>

          <p className="px-5">
            Help us grow our online presence and community. Apply as a social
            media marketer and earn GTC.
          </p>

          <a
            className="bg-white w-1/2 bg-opacity-10 hover:bg-opacity-20 bg-none transition-all ease-in-out duration-300 text-white font-bold py-2 px-4 rounded"
            href="/apply?position=socialMediaMarketer"
          >
            Apply Now
          </a>
        </div>
        <div className="w-full p-2 gap-2 text-center items-center flex flex-col max-w-md bg-white bg-opacity-10 shadow-lg rounded-lg overflow-hidden">
          <h2 className="text-2xl font-semibold">Coders</h2>

          <p className="px-5">
            Are you a coder with Javascript expreience and a passion for gaming?
            Join us to create amazing gaming experiences and earn GTC.
          </p>

          <a
            className="bg-white w-1/2 bg-opacity-10 hover:bg-opacity-20 bg-none transition-all ease-in-out duration-300 text-white font-bold py-2 px-4 rounded"
            href="/apply?position=coder"
          >
            Apply Now
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-lg ">
          Join our Discord server for more information and community
          interaction.
        </p>
        <a
          className="bg-white flex flex-row gap-2 text-xl items-center bg-opacity-10 hover:bg-opacity-20 bg-none transition-all ease-in-out duration-300 text-white font-bold py-2 px-4 rounded"
          href="https://discord.gg/SDWarP2UUN"
          target="_blank"
        >
          <BsDiscord />
          <p>Join Discord</p>
        </a>
      </div>
    </main>
  );
};

export default page;
