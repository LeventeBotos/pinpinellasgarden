"use client";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useSearchParams } from "next/navigation";
import { Metadata } from "next";

const ApplicationForm = ({ params }: { params: { position: string } }) => {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [discordName, setDiscordName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState(searchParams.get("position") || "");
  const [aboutYou, setAboutYou] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [why, setWhy] = useState("");

  //   const search = searchParams.get("position");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission
    await addDoc(collection(db, "requestingToBeAuthor"), {
      name,
      discordName,
      email,
      position,
      aboutYou,
      portfolio,
      why,
    });
    location.replace("/");
  };

  useEffect(() => console.log(position), []);

  return (
    <div className="w-full md:w-2/3 self-center h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 gradient">
        GamingTales Application Form
      </h1>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col w-full">
        <input
          type="text"
          id="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white bg-opacity-10 p-2 rounded "
          required
        />

        <input
          type="text"
          id="discod_name"
          placeholder="Discord Username"
          value={discordName}
          onChange={(e) => setDiscordName(e.target.value)}
          className="bg-white bg-opacity-10 p-2 rounded "
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white bg-opacity-10 p-2 rounded"
          required
        />
        <select
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="bg-white bg-opacity-10 p-2 rounded"
          required
        >
          <option value="" className="opacity-50 text-gray-400" disabled>
            What would you like to work as
          </option>
          <option value="writer">Writer</option>
          <option value="socialMediaMarketer">Social Media Marketer</option>
          <option value="coder">Coder</option>
        </select>

        <textarea
          id="Why"
          value={why}
          placeholder="Why would you like to work with us?"
          onChange={(e) => setWhy(e.target.value)}
          className="bg-white bg-opacity-10 p-2 rounded"
          required
        />
        <textarea
          id="aboutYou"
          value={aboutYou}
          placeholder="Tell us more about you (For writers, this will be on your author page)"
          onChange={(e) => setAboutYou(e.target.value)}
          className="bg-white bg-opacity-10 p-2 rounded"
          required
        />
        <input
          type="url"
          id="portfolio"
          placeholder="Your portfolio URL (if you have one)"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
          className="bg-white bg-opacity-10 p-2 rounded"
        />

        <button
          type="submit"
          className="bg-white bg-opacity-10 p-2 mt-2 hover:bg-opacity-20 duration-300 ease-in-out rounded cursor-pointer"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
