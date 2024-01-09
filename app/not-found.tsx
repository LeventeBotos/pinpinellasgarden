import React from "react";

const notFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center gap-10 text-center">
      <h1 className=" text-5xl md:text-9xl gradient">404</h1>
      <h2 className="text-2xl md:text-4xl">
        We could not find, what you were looking for
      </h2>
      <a href="/" className="w-auto self-center h-min ">
        Back to the base
      </a>{" "}
    </div>
  );
};

export default notFound;
