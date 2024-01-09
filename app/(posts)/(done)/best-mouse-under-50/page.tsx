import { Metadata } from "next";
import { GoClockFill } from "react-icons/go";
import Comments from "@/app/Comments";
import ProductsSlider from "@/app/ProductsSlider";
import {
  coverImage,
  title,
  description,
  authors,
  contents,
  time,
} from "./data.json";

const Card = ({
  title,
  description,
  content,
}: {
  title: string;
  description: string;
  content?: any;
}) => (
  <div
    className={`flex flex-col flex-1 gap-3 m-0 ${
      content ? "justify-between" : "justify-evenly"
    } w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg items-center text-center p-3`}
  >
    <h2 className="font-bold mb-2">{title}</h2>
    <p>{description}</p>
    <div className="w-full flex flex-col gap-5 ">{content}</div>
  </div>
);

const Section = ({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: any;
}) => (
  <section id={id} className="pt-16 md:pt-20 gap-5 flex flex-col w-full">
    <h2 className="font-bold text-white text-center ">{title}</h2>
    <div className="w-full flex flex-col gap-3 ">{content}</div>
  </section>
);

const StringToHtml = ({ contents }: { contents: any }) => {
  return <div dangerouslySetInnerHTML={{ __html: contents }} />;
};

const page = () => {
  return (
    <article className=" items-center bg-gradient-to-bl  from-0% to-25% w-full relative flex flex-col px-4 md:px-7 ">
      <div className="absolute h-96 w-full left-0 right-0 bg-black bg-opacity-50">
        <img
          src={coverImage}
          alt={`Image of ${title}`}
          className="absolute top-0 left-0 right-0 bottom-0 w-full  object-cover h-96 z-10 opacity-30"
        />
        <div className="flex flex-col justify-evenly absolute z-30 top-0 bottom-0 left-0 px-5 right-0 h-96">
          <h1 className="gradient text-2xl md:text-4xl drop-shadow-xl font-bold text-center pt-10">
            {title}
          </h1>
          <div className="flex byline justify-evenly self-center pb-10 ">
            <address className="author">
              By{" "}
              <a
                rel="author"
                href={`https://gamingtales.tech/${authors[0].url}`}
              >
                {authors[0].name}{" "}
              </a>
              {authors[1] && (
                <a
                  rel="author"
                  href={`https://gamingtales.tech/${authors[1].url}`}
                >
                  & {authors[1].name}{" "}
                </a>
              )}
            </address>
          </div>
          <h2 className="w-full text-lg drop-shadow-xl pb-5 md:text-xl md:w-2/3 self-center">
            {description}
          </h2>
        </div>
      </div>
      <div className="h-96 w-full"></div>
      <div className="flex flex-col w-full pt-10 md:flex-row gap-5 justify-evenly">
        <div className="self-center ">
          <h2 className="self-center text-lg text-center md:text-xl">
            Contents
          </h2>
          <ul className=" w-full md:w-auto h-min self-center list-disc">
            {contents.map((item: any, index) => (
              <li key={index} className="hover:cursor-pointer">
                <a href={`#${item.id}`}>{`${index + 1}. ${item.title}`}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex text-lg md:text-xl text-white opacity-70 h-auto items-center text-center w-auto justify-evenly flex-row gap-5">
          <div className="flex flex-row gap-3 items-center">
            <GoClockFill />
            <p>{time}</p>
          </div>
        </div>
      </div>
      {/* Section: Layout */}
      {contents.map((item: any, index) => (
        <div className="flex flex-col w-full gap-1" key={index}>
          {item.type == "1" && (
            <Section
              id={item.id}
              title={item.title}
              content={
                <>
                  <h3 className="w-full self-center md:w-3/4">{item.p1}</h3>

                  <h3 className="w-full self-center md:w-3/4">{item.p2}</h3>
                  <StringToHtml contents={item.content1} />
                  <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:mx-32">
                    {item.cards?.map((card: any, cardIndex: number) => (
                      <Card
                        key={cardIndex}
                        title={card.title}
                        description={card.description}
                        content={card.content}
                      />
                    ))}
                  </div>
                  {/* <StringToHtml contents={item.content2} /> */}
                  {item.recommended && item.recommended?.length != 0 && (
                    <ProductsSlider items={item.recommended} />
                  )}
                </>
              }
            />
          )}
          {item.type == "2" && (
            <Section
              id={item.id}
              title={item.title}
              content={
                <>
                  <h3 className="w-full self-center md:w-3/4">{item.p1}</h3>

                  <h3 className="w-full self-center md:w-3/4">{item.p2}</h3>
                  {/* <StringToHtml contents={item.content1} /> */}
                  <div className="flex flex-col gap-2">
                    {item.sides?.map((side: any, sideIndex: number) => (
                      <div
                        key={sideIndex}
                        className={`flex gap-5 flex-col ${
                          (sideIndex / 2) % 1
                            ? "md:flex-row"
                            : "md:flex-row-reverse"
                        }`}
                      >
                        <img
                          src={side.img}
                          alt={`Image of ${side.title}`}
                          className="w-1/2 rounded-lg p-1"
                        />
                        <div className="flex flex-col w-1/2 p-2 justify-evenly gap-5">
                          <h2 className="font-bold">
                            <strong>{side.title}</strong>
                          </h2>
                          <h3>{side.description}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  <StringToHtml contents={item.content2} />
                  {item.recommended && item.recommended?.length != 0 && (
                    <ProductsSlider items={item.recommended} />
                  )}
                </>
              }
            />
          )}
        </div>
      ))}

      <div className="flex flex-col gap-5 items-cemter text-md">
        <p className=" pt-10 text-center">
          Thanks for reading all the way through!
        </p>
        <p className="text-white opacity-70 text-xs text-center w-full self-center md:w-3/4">
          Please keep in mind, that the links used in this article are
          affliliate links. This means, we profit from you buying them.
        </p>
        <p className=" pb-10 text-center font-bold">
          I&apos;m curious to know your thoughts on this topic, share them in
          the comments!
        </p>
      </div>

      <Comments name={title} />
    </article>
  );
};

export default page;

export const metadata: Metadata = {
  title: String(title),
  robots: "index, follow",
  metadataBase: new URL("https://gamingtales.tech"),
  authors: authors,
  keywords: ["Mouse", "Best", "Gaming", "Under 50", "Under $50"],
  description: String(description),
  openGraph: {
    title: String(title),
    description: String(description),
    type: "article",
    publishedTime: "2023-11-01T00:00:00.000Z",
    authors: [authors[0].name, authors[1] && authors[1].name],
    images: [
      {
        url: "https://gamingtales.tech/logo.png", // Replace with the actual image URL
        alt: "Image of the sites logo",
      },
    ],
    locale: "en_US",
  },
};
