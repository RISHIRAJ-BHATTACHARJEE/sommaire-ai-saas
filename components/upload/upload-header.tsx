import { Sparkles } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";

const UploadHeader = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="relative p-[1px] md:p-[3px] lg:p-[4px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group cursor-pointer">
          <Badge className="relative px-6 py-2 text-base font-medium bg-white rounded-full transition-colors duration-200 gap-2 [&>svg]:!size-5 group-hover:bg-gradient-to-r group-hover:from-rose-200 group-hover:via-rose-300 group-hover:to-rose-400 group-hover:text-white group-hover:animate-gradient-x ">
            <Sparkles className="text-rose-500 group-hover:text-white" />
            <p className="text-rose-500 group-hover:text-white">
              AI-Powered Content Creation
            </p>
          </Badge>
        </div>
        <div className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Start Uploading{" "}
          <span className="relative inline-block">
            <span className="relative z-10 px-2">Your PDF's</span>
            <span
              className="absolute inset-0 -bottom-1 bg-yellow-200/50 -rotate-2 rounded-lg transform -skew-y-1"
              aria-hidden="true"
            ></span>
          </span>
        </div>
        <div className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">
          <p>Start Uploading Your PDF and let our AI do the magic! ✨</p>
        </div>
      </div>
    </div>
  );
};

export default UploadHeader;
