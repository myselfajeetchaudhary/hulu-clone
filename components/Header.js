import Image from "next/image";
import hululogo from "../public/hulu.png";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CheckBadgeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-col items-center m-5 lg:mt-8 md:flex-row md:justify-between">
      <div className="flex lg:flex-grow justify-between max-w-2xl">
        <HeaderItem Icon={HomeIcon} title="HOME" />
        <HeaderItem Icon={BoltIcon} title="TRENDING" />
        <HeaderItem Icon={CheckBadgeIcon} title="VERIFIED" />
        <HeaderItem Icon={RectangleStackIcon} title="COLLECTIONS" />
        <HeaderItem Icon={MagnifyingGlassIcon} title="SEARCH" />
        <HeaderItem Icon={UserIcon} title="ACCOUNT" />
      </div>
      <Link href="/">
        <Image className="md:-mt-5 md:mr-7" src={hululogo} alt="Hulu Logo" />
      </Link>
    </header>
  );
}

export default Header;
