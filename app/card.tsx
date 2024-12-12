import React from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";

interface cardProps {
  username: string;
  dp: string;
  bio: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

const Card: React.FC<cardProps> = ({ username, dp, bio, socials = {} }) => {
  return (
    <div
      className="w-96 max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 text-center 
      md:hover:scale-105 lg:hover:scale-110 xl:hover:scale-110 
      hover:bg-zinc-200 duration-100"
    >
      <div className="mb-4">
        <img
          src={dp}
          alt={`${username}`}
          className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full mx-auto object-cover border-4 border-gray-200"
        />
      </div>

      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
        {username}
      </h2>

      <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-4">
        {bio}
      </p>

      <div className="flex justify-center space-x-2 md:space-x-4 mt-4">
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-colors"
          >
            <Linkedin className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </a>
        )}
        {socials.twitter && (
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors"
          >
            <Twitter className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </a>
        )}

        {socials.instagram && (
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition-colors"
          >
            <Instagram className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
