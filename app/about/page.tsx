import { Metadata } from "next";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen items-center flex flex-col justify-evenly ">
      <h1 className="text-2xl md:text-3xl">
        Hello, and welcome to GamingTales!
      </h1>

      <div className="w-full items-center flex flex-col gap-5 self-center md:w-2/3 text-xl md:text-2xl">
        {/* Additional content */}
        <h2>This is GamingTales, and we&apos;re thrilled to have you here!</h2>
        <p className="text-lg md:text-xl">
          At GamingTales, we are passionate about everything related to gaming
          and technology. Our mission is to provide you with valuable insights,
          reviews, and guides to enhance your gaming experience.
        </p>

        <p className="text-lg md:text-xl">
          Whether you&apos;re a seasoned gamer or just starting, we&apos;ve got
          something for you. From in-depth articles about the latest gaming
          trends to hands-on reviews of cutting-edge hardware, we cover it all.
        </p>

        <p className="text-lg md:text-xl">
          Our team of dedicated writers and enthusiasts shares a common love for
          gaming, and we believe in creating a community where everyone can
          explore, learn, and connect. Join us on this exciting journey into the
          world of GamingTales!
        </p>
      </div>
    </div>
  );
};

export default page;

export const metadata: Metadata = {
  title: "About GamingTales",
  robots: "index, follow",
  metadataBase: new URL("https://gamingtales.tech"),
  description: "Read more about the origin and motivation of this site.",
  openGraph: {
    title: "About GamingTales",
    description: "Read more about the origin and motivation of this site.",
    publishedTime: "2023-01-01T00:00:00.000Z",
    images: [
      {
        url: "https://gamingtales.tech/logo.png", // Replace with the actual image URL
        alt: "Image of the sites logo",
      },
    ],
    locale: "en_US",
  },
};
