"use client";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import LoadingSmall from "./LoadingSmall";
import Card from "./Card";
import Trending from "./Trending";
import Script from "next/script";
import Work from "./Work";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    // Fetch articles from Firestore
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "articles"), orderBy("date", "desc"), limit(5))
        );
        const articlesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articlesData);
      } catch (error) {
        console.error("Error getting articles: ", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <main className="flex flex-col w-full relative">
      <div className="absolute h-96 self-center w-2/3 xl:w-1/2 top-[-10%] md:top-[-15%] from-0% to-50% md:to-75% bg-opacity-50 blur-3xl -z-10 bg-gradient-radial from-green-800 to-[#111111]  " />
      <div className="w-full py-3">
        <p className=" text-start px-3 pt-5 self-start text-xl font-bold text-white z-20 opacity-75">
          Trending articles
        </p>
        <Trending />
      </div>
      <div className="p-3 w-full md:px-5">
        <p className=" text-start self-start text-white z-20 opacity-75 text-xl font-bold">
          Latest articles
        </p>

        <div className="w-full rounded-lg gap-3 flex relative py-2 flex-col md:flex-row ">
          {articles[0] ? (
            <a
              href={articles[0].url}
              className="w-full hidden cursor-pointer bg-none md:w-7/12 md:h-96 min-h-96 rounded-lg border-2 border-green-800 border-opacity-0 hover:border-opacity-60 transition-all ease-in-out duration-200 bg-white bg-opacity-10  md:flex flex-col md:flex-row gap-3 p-3"
            >
              <img
                src={articles[0].image}
                alt={articles[0].title}
                loading="lazy"
                className="md:w-1/2 xl:w-2/3 w-full object-cover h-full max-h-64 md:max-h-96 rounded-lg bg-[#222222]"
              />

              <div className="flex cursor-pointer w-full md:w-1/2 xl:w-1/3 flex-col gap-3">
                <p className="text-xl md:text-2xl font-bold">
                  {articles[0].title}
                </p>
                <p className="text-xs text-gray-300 md:text-sm">
                  {new Date(articles[0].date.seconds * 1000).toDateString()}
                </p>
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
          ) : (
            <div className="w-full md:w-7/12 h-96 rounded-lg bg-white bg-opacity-10 flex flex-col md:flex-row gap-3 p-3">
              <div className="md:w-1/2 xl:w-2/3 w-full h-full rounded-lg bg-[#222222]"></div>
              <div className="flex cursor-pointer w-full md:w-1/2 xl:w-1/3 flex-col gap-3">
                {/* <p className=" rounded-lg w-2/3 h-10 md:h-5 mt-2 skeleton" /> */}
                <Skeleton className="rounded-lg h-10 md:h-5 w-2/3 mt-2" />
                <Skeleton className=" rounded-lg w-1/2 md:h-4 h-7 mt-2 " />
                <Skeleton className=" rounded-lg w-full md:h-8 h-10 mt-2 " />
                <Skeleton className=" rounded-lg w-full h-full md:h-24 mt-2 " />
              </div>
            </div>
          )}
          <div className="flex md:w-5/12 w-full h-auto md:h-96 flex-row md:flex-col pb-2 overflow-x-auto md:overflow-x-auto justify-between gap-3">
            <div className="flex md:hidden flex-row">
              {" "}
              {articles[0] ? <Card article={articles[0]} /> : <LoadingSmall />}
            </div>
            {articles[1] ? <Card article={articles[1]} /> : <LoadingSmall />}
            {articles[2] ? <Card article={articles[2]} /> : <LoadingSmall />}
            {articles[3] ? <Card article={articles[3]} /> : <LoadingSmall />}
            {articles[4] ? <Card article={articles[4]} /> : <LoadingSmall />}
          </div>
        </div>
      </div>
      <Work />
    </main>
  );
}
