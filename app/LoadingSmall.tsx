import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingSmall = () => {
  return (
    <div className="w-full  h-auto rounded-lg bg-white bg-opacity-10 cursor-pointer flex flex-col md:flex-row gap-3 p-2">
      <Skeleton className=" w-full md:w-36 h-full rounded-lg " />
      <div className="flex w-60 h-full flex-col gap-5 justify-evenly ">
        <Skeleton className="  w-2/3 h-5" />
        <Skeleton className="  w-full h-12" />
      </div>
    </div>
  );
};

export default LoadingSmall;
