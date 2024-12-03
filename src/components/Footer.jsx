import { Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" border-t border-gray-400 py-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="w-[70%]">
          <div className="flex items-center gap-10 mb-4">
            <Link>About Us</Link>
            <Link>Terms of Use</Link>
            <Link>Privacy Policy</Link>
            <Link>Contact</Link>
          </div>
          <p className="text-md">
            Copyright 2022. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc vulputate libero et velit interdum, ac aliquet odio
            mattis.
          </p>
        </div>
        <div className="flex items-center text-2xl gap-4 text-white">
          <a className="bg-[#00A79D] rounded-full w-8 h-8 flex items-center justify-center">
            <CiInstagram />
          </a>
          <a className="bg-[#00A79D] rounded-full w-8 h-8 flex items-center justify-center">
            <FaYoutube />
          </a>
          <a className="bg-[#00A79D] rounded-full w-8 h-8 flex items-center justify-center">
            <FaTwitter />
          </a>
          <a className="bg-[#00A79D] rounded-full w-8 h-8 flex items-center justify-center">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};
