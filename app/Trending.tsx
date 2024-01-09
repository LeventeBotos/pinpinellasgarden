"use client";

const articles = [
  {
    title: " How to build a custom keyboard under 100",
    description:
      "In this guide, we'll show you, how to pick the parts and build your first custom mechanical keyboard",
    url: "custom-keyboard-under-100",
    image: "/images/custom-keyboard-under-100/1.jpeg",
    author: ["Levente Botos"],
  },
  {
    title: "Best mouse under 50",
    description:
      "In this guide, we will show you how to choose the perfect mouse for your liking. All this, whilst staying under 50 USD.",
    url: "best-mouse-under-50",
    image: "/images/best-mouse-under-50/1.jpeg",
    author: ["Darius Zachar", "Levente Botos"],
  },
];

const Trending = () => {
  return (
    <div className="w-full h-auto py-2 left-0 right-0 px-5 flex xl:flex-row flex-col z-20 gap-3">
      <a
        href={articles[0].url}
        className="w-full cursor-pointer shadow-lg bg-none md:h-96 min-h-96 rounded-lg border-2 border-green-800 border-opacity-0 hover:border-opacity-60 transition-all ease-in-out duration-200 bg-white bg-opacity-10 flex flex-col md:flex-row gap-3 p-3"
      >
        <img
          src={articles[0].image}
          alt={articles[0].title}
          className="md:w-1/2 xl:w-2/3 w-full object-cover h-full rounded-lg bg-[#222222]"
        />
        {/* <div className="md:w-2/3 w-full h-full rounded-lg bg-[#222222]"></div> */}
        <div className="flex cursor-pointer w-full md:w-1/2 xl:w-1/3 flex-col gap-3">
          <p className="text-xl md:text-2xl font-bold">{articles[0].title}</p>

          <div className="text-xs flex gap-1 md:text-sm">
            <p>By</p>
            {articles[0].author.length == 1 ? (
              <p>{articles[0].author[0]}</p>
            ) : (
              <p>
                {articles[0].author[0]} & {articles[0].author[1]}
              </p>
            )}
          </div>
          <p className="text-sm md:text-md">{articles[0].description}</p>
        </div>
      </a>
      <a
        href={articles[1].url}
        className="w-full cursor-pointer border-2 bg-none shadow-lg border-green-800 border-opacity-0 hover:border-opacity-60 transition-all ease-in-out duration-200 md:h-96 min-h-96  rounded-lg bg-white bg-opacity-10 flex flex-col md:flex-row gap-3 p-3"
      >
        <img
          src={articles[1].image}
          alt={articles[1].title}
          className="md:w-1/2 xl:w-2/3 w-full object-cover h-full rounded-lg bg-[#222222]"
        />
        {/* <div className="md:w-2/3 w-full h-full rounded-lg bg-[#222222]"></div> */}
        <div className="flex cursor-pointer w-full md:w-1/2 xl:w-1/3 flex-col gap-3">
          <p className="text-xl md:text-2xl font-bold">{articles[1].title}</p>

          <div className="text-xs flex gap-1 md:text-sm">
            <p>By</p>
            {articles[1].author.length == 1 ? (
              <p>{articles[1].author[1]}</p>
            ) : (
              <p>
                {articles[1].author[0]} & {articles[1].author[1]}
              </p>
            )}
          </div>
          <p className="text-sm md:text-md">{articles[1].description}</p>
        </div>
      </a>
    </div>
  );
};

export default Trending;
