import requests from "@/utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex space-x-10 sm:space-x-20 px-10 pb-2 sm:px-12 text-2xl whitespace-nowrap overflow-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 w-1/12 h-10 bg-gradient-to-l from-[#06202a]" />
    </nav>
  );
}

export default Nav;
