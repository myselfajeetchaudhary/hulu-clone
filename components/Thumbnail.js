import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const Base_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        src={
          `${Base_URL}${result.backdrop_path || result.poster_path}` ||
          `${Base_URL}${result.poster_path}`
        }
        height={540}
        width={960}
      />
      <div className="p-2">
        <p className="truncate max-w-md ">{result.overview}</p>
        <h2 className="mt-1 text-white text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} `}
          {""}
          {result.release_date || result.first_air_date} .{""}
          <HandThumbUpIcon className="h-5 w-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
})

export default Thumbnail;
