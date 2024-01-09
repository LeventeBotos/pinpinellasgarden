"use client";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";

const UserPosts = ({ name }: { name: string }) => {
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    // Fetch articles from Firestore
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(
          query(
            collection(db, "articles"),
            orderBy("date", "desc"),
            where("author", "array-contains", name)
          )
        );

        const articlesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articlesData);
        console.log(articlesData);
      } catch (error) {
        console.error("Error getting articles: ", error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <div className="w-full">
      <p className="text-xl font-bold text-center pb-2">My latest articles</p>
      <div className=" flex-shrink-0 text-white  w-full z-40 h-72 md:h-44 overflow-x-auto flex flex-row gap-2">
        {articles.map((article: any, index: number) => {
          return (
            <a
              target="_blank"
              href={article.url}
              className="bg-white flex-shrink-0 flex flex-col md:flex-row bg-none bg-opacity-10 hover:bg-opacity-20 transition-all ease-in-out duration-300 p-2 rounded-lg"
              key={index}
            >
              <div className="md:h-full h-1/2 flex flex-col justify-evenly w-56 md:w-auto rounded-lg">
                <img
                  src={article.image}
                  alt={`Image of ${article.name}`}
                  loading="lazy"
                  className=" h-full rounded-lg w-full "
                />
              </div>
              <div className=" w-56 flex h-1/2 md:h-full justify-evenly flex-col p-2 gap-2">
                <p className="text-lg font-bold">{article.title}</p>
                <p className="text-sm">{article.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default UserPosts;
