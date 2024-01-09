"use client";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { GoSignIn } from "react-icons/go";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { BiLogOut, BiPencil } from "react-icons/bi";
import {
  doc,
  getDoc,
  query,
  setDoc,
  where,
  collection,
  getDocs,
  limit,
  DocumentData,
} from "firebase/firestore";
import { CiUser } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState("");
  const [isAuthor, setIsAuthor] = useState("");
  const [authorURL, setAuthorURL] = useState("");

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setImg(auth.currentUser?.photoURL || "");
  }, [auth]);

  useEffect(() => {
    if (window != undefined)
      setImg(localStorage.getItem("auth.photoURL") || "");
  }, []);

  useEffect(() => {
    if (window != undefined)
      setAuthorURL(localStorage.getItem("auth.authorURL") || "");
  }, []);

  useEffect(() => {
    if (window != undefined)
      setIsAuthor(localStorage.getItem("auth.isAuthor") || "");
  }, []);

  const googleLogin = async () => {
    try {
      // Sign in with Google and wait for the result
      await signInWithPopup(auth, new GoogleAuthProvider());

      // Access the user after successful sign-in
      const user = auth.currentUser;

      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userr = await getDoc(userRef);

        if (userr.exists()) {
          localStorage.setItem(
            "auth.isAuthor",
            String(userr.data().isAuthor || "")
          );
          localStorage.setItem("auth.authorURL", userr.data().authorURL || "");
          localStorage.setItem("auth.photoURL", userr.data().photoURL || "");
        } else {
          console.log("No such document!");
          localStorage.setItem("auth.photoURL", user?.photoURL || "");

          await setDoc(userRef, {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            isAuthor: false,
          });
        }
      }
      location.reload();
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (scrollHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="h-16 md:h-20 m-0 w-screen fixed top-0 z-50 bgblur left-0 right-0 gap-3 flex justify-between p-2 px-5 items-center">
      <a href="/" className="nothover text-xl md:text-3xl font-bold gradient">
        Pinpinella&apos;s garden
      </a>
      <div
        onSubmit={(e) => {
          e.preventDefault();
          console.log("done");
        }}
        className="w-1/2 md:w-1/3 focus:w-full focus-within:outline outline-1 outline-green-800 bg-white bg-opacity-10 rounded-xl flex items-center justify-between p-1 pr-2"
      >
        <input
          type="text"
          className="bg-white bg-opacity-0 outline-none rounded-lg px-1 py-1 md:py-2 w-3/4 md:w-5/6"
          placeholder="Search"
        />

        {img ? (
          <button
            onClick={togglePanel}
            type="button"
            className="bg-black  rounded-full self-center"
          >
            <Avatar>
              <AvatarImage src={img} />
              <AvatarFallback>
                {String(auth.currentUser?.displayName)[0]}
              </AvatarFallback>
            </Avatar>

            {/* <img
              src={img}
              alt="Profile"
              
              className="w-full h-full rounded-full"
            /> */}
          </button>
        ) : (
          <button
            onClick={() => googleLogin()}
            type="button"
            aria-label="Sign in"
            className="h-7 bg-none w-7 md:w-10 md:h-10 items-center flex flex-col justify-evenly bg-white bg-opacity-0 hover:bg-opacity-10 ease-in-out transition-all duration-300 rounded-full self-center"
          >
            <GoSignIn />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="absolute justify-evenly gap-2 top-16 md:top-24 p-5 shadow-lg bg-[#222222]  text-center text-white w-full md:w-96 items-center md:right-10 right-0 rounded-t-none md:rounded-t-lg rounded-lg z-50 flex flex-col">
          {img && (
            <div className="group flex relative  flex-col">
              <img
                src={img}
                alt="Profile picture"
                className="h-20 w-20 rounded-full cursor-pointer transition-all ease-in-out duration-300 group-hover:opacity-80"
              />
              <div className="absolute top-0 left-0 bg-black p-2 rounded-lg bg-opacity-70 opacity-0 group-hover:opacity-100 duration-300 ease-in-out transition-opacity">
                <BiPencil />
              </div>
            </div>
          )}
          <div className="items-center">
            <p className="text-xl">Hiya,</p>
            <p className="text-xl ">{auth.currentUser?.displayName}!</p>
            {/* <div className="rounded-full text-sm self-center bg-blue-400 bg-opacity-10 w-1/2 h-min p-1">
              Level 1
            </div> */}
          </div>

          <div className="w-full items-center flex flex-col ">
            {isAuthor ? (
              <div className="flex flex-col gap-2 w-full items-center">
                <div className=" cursor-pointer  bg-none  text-white flex flex-col justify-center items-center w-3/4  transition-all bg-opacity-100 ease-in-out duration-300 text-center">
                  {" "}
                  <a
                    href={authorURL}
                    className="bg-none flex transition-all duration-300 ease-in-out flex-row gap-2 justify-center bg-white bg-opacity-0 border-white border-opacity-10 hover:border-opacity-0 border-2  rounded-t-lg hover:bg-opacity-20 w-full h-full items-center p-2"
                  >
                    {" "}
                    <CiUser />
                    <p>Your Profile</p>
                  </a>
                  <a
                    href="/earnings"
                    className="bg-none flex transition-all duration-300 ease-in-out flex-row gap-2 justify-center border-t-0 bg-white bg-opacity-0 border-white border-opacity-10 border-2 hover:border-opacity-0  rounded-b-lg hover:bg-opacity-20 w-full h-full items-center p-2"
                  >
                    {" "}
                    <BsGraphUpArrow />
                    <p>Your Earnings</p>
                  </a>
                </div>
                <a
                  href="/new-post"
                  className=" cursor-pointer bg-none  rounded-full flex flex-row justify-center items-center gap-2 w-3/4 border-[#333333] border-2 p-2 hover:bg-opacity-90 text-black transition-all  bg-white bg-opacity-100 ease-in-out duration-300 text-center"
                >
                  {" "}
                  <BiPencil />
                  <p>New Post</p>
                </a>
              </div>
            ) : (
              <a
                href="/work"
                className=" cursor-pointer bg-none  w-3/4 self-center rounded-full flex flex-row justify-center items-center gap-2  border-[#333333] border-2 p-2 hover:bg-opacity-70 text-black transition-all  bg-white bg-opacity-80 ease-in-out duration-300 text-center"
              >
                {" "}
                <BiPencil />
                <p>Become A Writer</p>
              </a>
            )}
          </div>

          <button
            aria-label="sign out"
            onClick={async () => {
              localStorage.setItem("auth.photoURL", "");
              localStorage.setItem("auth.isAuthor", "");
              localStorage.setItem("auth.authorURL", "");
              signOut(auth);
              location.reload();
            }}
            className=" cursor-pointer rounded-full flex flex-row justify-center items-center gap-3 w-3/4 border-[#333333] border-2 p-2 hover:bg-[#333333] ease-in-out duration-300 text-center"
          >
            {" "}
            <BiLogOut />
            <p>Sign Out</p>
          </button>
        </div>
      )}

      <div
        className="progress-bar h-1 w-full gradientbg absolute left-0 right-0 bottom-0"
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
};
