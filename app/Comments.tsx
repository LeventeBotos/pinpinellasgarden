"use client";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  runTransaction,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { FaHeart, FaReply } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Comments = ({ name }: { name: string }) => {
  const [comments, setComments] = useState<any>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

  const handleCommentSubmit = async () => {
    try {
      let commentData = {
        userName: auth.currentUser?.displayName,
        profileImage: auth.currentUser?.photoURL,
        text: newComment,
        date: new Date(),
        likes: 0, // Initialize likes for comments
      };

      if (replyTo) {
        // Add a new reply to the specified comment
        // Ensure that likes are initialized for replies as well
        await addDoc(
          collection(
            db,
            "comments",
            name,
            "messages",
            replyTo ? replyTo : "root", // Use "root" if it's a comment
            "replies"
          ),
          {
            ...commentData,
            likes: 0, // Initialize likes for replies
          }
        );
      } else {
        // Add a new comment
        await addDoc(collection(db, "comments", name, "messages"), commentData);
      }

      // Fetch and update comments after submission
      fetchCommentsAndReplies();
      setNewComment("");
      setReplyTo(null);
    } catch (error) {
      console.error("Error adding comment or reply: ", error);
    }
  };

  const handleReplyClick = (commentId: string) => {
    setReplyTo(commentId);
  };

  const handleLikeClick = async (
    commentId: string,
    isReply: boolean = false,
    dataId?: string
  ) => {
    try {
      if (!likedComments.has(commentId)) {
        const collectionPath = isReply
          ? `comments/${name}/messages/${dataId}/replies/`
          : `comments/${name}/messages`;

        const updatedComments = [...comments];
        const commentIndex = isReply
          ? updatedComments.findIndex(
              (c) =>
                c.id === dataId &&
                c.replies.some((r: any) => r.id === commentId)
            )
          : updatedComments.findIndex((c) => c.id === commentId);

        if (commentIndex !== -1) {
          const commentRef = doc(db, collectionPath, commentId);

          await runTransaction(db, async (transaction) => {
            const docSnapshot = await transaction.get(commentRef);
            const currentLikes = docSnapshot.data()?.likes || 0;

            transaction.update(commentRef, {
              likes: currentLikes + 1,
            });
          });

          setLikedComments(
            (prevLikedComments) => new Set(prevLikedComments.add(commentId))
          );

          // Instead of refetching all comments and replies, update the local state directly
          const updatedCommentsCopy = [...updatedComments];
          if (isReply) {
            const replyIndex = updatedCommentsCopy[
              commentIndex
            ].replies.findIndex((r: any) => r.id === commentId);
            if (replyIndex !== -1) {
              updatedCommentsCopy[commentIndex].replies[replyIndex].likes += 1;
            }
          } else {
            updatedCommentsCopy[commentIndex].likes += 1;
          }

          setComments(updatedCommentsCopy);
        }
      }
    } catch (error) {
      console.error("Error updating likes: ", error);
    }
  };

  const fetchCommentsAndReplies = async () => {
    try {
      const commentsQuerySnapshot = await getDocs(
        query(
          collection(db, "comments", name, "messages"),
          orderBy("likes", "desc")
        )
      );

      const commentsData = commentsQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        replies: [],
      }));

      await Promise.all(
        commentsData.map(async (comment: any) => {
          const repliesQuerySnapshot = await getDocs(
            query(
              collection(
                db,
                "comments",
                name,
                "messages",
                comment.id,
                "replies"
              )
            )
          );

          const repliesData = repliesQuerySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          comment.replies = repliesData;
        })
      );

      setComments(commentsData);
    } catch (error) {
      console.error("Error getting comments: ", error);
    }
  };

  useEffect(() => {
    fetchCommentsAndReplies();
  }, []);

  const googleLogin = async () => {
    try {
      // Sign in with Google and wait for the result
      await signInWithPopup(auth, new GoogleAuthProvider());

      // Access the user after successful sign-in
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid); // "users" is the collection name
        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
        });
      }
      location.reload();
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="flex flex-col w-full gap-2 xl:mx-32 md:w-3/4 py-10  self-center mx-0">
      <p className="text-lg md:text-xl text-center font-bold">Comments</p>
      <div className="flex flex-col gap-1 items-center">
        {replyTo && (
          <div className="bg-white bg-opacity-10 rounded-lg items-center p-1 w-full flex flex-row gap-2">
            <IoMdCloseCircleOutline
              onClick={() => setReplyTo(null)}
              className="opacity-50 hover:opacity-100 transition-all ease-in-out duration-300 h-7 w-7"
            />
            <p> Replying... </p>
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommentSubmit();
          }}
          className={`w-full flex pb-5 gap-2 flex-row relative  `}
        >
          {auth.currentUser == null && (
            <div className="w-full absolute h-full left-0 right-0 top-0 z-10 text-white rounded-lg bottom-0 text-center flex flex-col justify-evenly text-xl bg-white bg-opacity-20 ">
              <div className="items-center">
                {" "}
                Please{" "}
                <a className="cursor-pointer" onClick={() => googleLogin()}>
                  Log In
                </a>{" "}
                to post a comment!
              </div>
            </div>
          )}
          {replyTo && <div className=" h-12 rounded-full w-1 gradientbg " />}
          <div
            className={`flex relative ${
              auth.currentUser == null && "blur-lg"
            } items-center w-full bg-white bg-opacity-10 p-2 rounded-lg flex-row gap-2`}
          >
            <img
              src={auth.currentUser?.photoURL || ""}
              alt={`Profile picture of ${auth.currentUser?.displayName}`}
              className="md:w-10 md:h-10 w-8 h-8 absolute top-2 left-2 rounded-full"
            />
            <div className=" w-12 h-12  " />

            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-row items-center gap-3">
                <p className="text-sm md:text-md font-bold">
                  {auth.currentUser?.displayName}
                </p>
                <p className=" text-xs md:text-sm opacity-50">
                  {String(new Date().toDateString())}
                </p>
              </div>
              <textarea
                placeholder="Write your comment..."
                value={newComment}
                className="w-full p-1 md:p-2 bg-white bg-opacity-10 rounded-lg text-base "
                onChange={(e) => setNewComment(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className={`w-1/5 lg:w-1/6 buttonn disabled:opacity-25 rounded-l-none ${
              auth.currentUser == null && "blur-lg"
            }`}
            // onClick={(e) => {
            //   e.preventDefault();
            //   handleCommentSubmit();
            // }}
            disabled={!newComment}
          >
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <span className="text-xs md:text-lg">Send</span>
          </button>
        </form>
      </div>
      {comments.map((data: any, index: number) => (
        <div key={index}>
          <div className="flex relative items-center w-full bg-white bg-opacity-10 p-2 rounded-lg flex-row gap-2">
            <img
              src={data.profileImage}
              alt={`Profile picture of ${data.userName}`}
              className="md:w-10 md:h-10 w-8 h-8 absolute top-2 left-2 rounded-full"
            />
            <div className=" w-12 h-12  " />

            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-row items-center gap-3">
                <p className="text-sm md:text-md font-bold">{data.userName}</p>
                <p className=" text-xs md:text-sm opacity-50">
                  {new Date(data.date.seconds * 1000).toDateString()}
                </p>
              </div>
              <p className="font-normal text-base">{data.text}</p>
            </div>
            <div className="flex flex-col gap-2 items-center p-1">
              <FaReply
                className="opacity-50 hover:opacity-80 transition-all ease-in-out duration-300"
                onClick={() => handleReplyClick(data.id)}
              />
              <div className="flex flex-row gap-1 items-center">
                <FaHeart
                  onClick={() => {
                    handleLikeClick(data.id, false);
                    console.log(likedComments);
                  }}
                  className={`opacity-50 hover:opacity-80 ${
                    likedComments.has(data.id) && "opacity-100"
                  } transition-all ease-in-out duration-300 text-cyan-400`}
                />
                <span className=" text-xs md:text-sm opacity-50 ">
                  {data.likes || 0}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            {data.replies && data.replies.length > 0 && (
              <div className="flex flex-col w-11/12 self-end gap-2 py-2 items-center">
                {data.replies.map((reply: any, replyIndex: number) => (
                  <div
                    key={replyIndex}
                    className="flex h-auto w-full flex-row md:gap-2 gap-1"
                  >
                    <div className=" h-12 rounded-full w-1 gradientbg " />
                    <div className="flex relative  items-center w-full bg-white bg-opacity-10 p-2 rounded-lg flex-row gap-2">
                      <img
                        src={reply.profileImage}
                        alt={`Profile picture of ${reply.userName}`}
                        className="md:w-10 md:h-10 w-8 h-8 absolute top-2 left-2 rounded-full"
                      />
                      <div className=" w-12 h-12  " />

                      <div className="flex flex-col gap-1 w-full">
                        <div className="flex flex-row items-center gap-3">
                          <p className="text-sm md:text-md font-bold">
                            {reply.userName}
                          </p>
                          <p className=" text-xs md:text-sm opacity-50">
                            {new Date(data.date.seconds * 1000).toDateString()}
                          </p>
                        </div>
                        <p className=" font-normal">{reply.text}</p>
                      </div>
                      <div className="flex flex-col gap-2 items-center p-1">
                        <div className="flex flex-row gap-1 items-center">
                          <FaHeart
                            onClick={() =>
                              handleLikeClick(reply.id, true, data.id)
                            }
                            className={`opacity-50 hover:opacity-80 ${
                              likedComments.has(reply.id) && "opacity-100"
                            } transition-all ease-in-out duration-300 text-cyan-400`}
                          />
                          <span className=" text-xs md:text-sm opacity-50 ">
                            {reply.likes || 0}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
