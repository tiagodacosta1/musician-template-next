import Link from "next/link"; // Import Link from Next.js
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaSoundcloud,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-8 mt-8 border-t border-[#4b6043]">
      <div className="flex flex-col xl:flex-row justify-between items-center space-y-6 xl:space-y-0 xl:space-x-8">
        {/* Name and Coded by Section */}
        <div className="text-center xl:text-left">
          <Link href="/" aria-label="Home">
            <div className="text-sm xl:text-lg font-merriweather tracking-widest cursor-pointer">
              <span className="text-[#4b6043] uppercase">Aline</span>
              <span className="text-[#658354] font-bold uppercase xl:text-xl">
                Christ
              </span>
              <span className="text-xs xl:text-base uppercase text-[#658354]">
                Cellist
              </span>
            </div>
          </Link>
          <p className="text-xs xl:text-base text-[#4b6043] mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-xs xl:text-base text-gray-600">
            Website coded by <span className="font-semibold">Tiago Costa</span>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 xl:space-x-6">
          <Link href="https://facebook.com" aria-label="Facebook" passHref>
            <FaFacebook className="text-[#4b6043] hover:text-[#658354] text-2xl xl:text-3xl transform transition-transform duration-300 cursor-pointer" />
          </Link>

          <Link href="https://instagram.com" aria-label="Instagram" passHref>
            <FaInstagram className="text-[#4b6043] hover:text-[#658354] text-2xl xl:text-3xl transform transition-transform duration-300 cursor-pointer" />
          </Link>

          <Link href="https://linkedin.com" aria-label="LinkedIn" passHref>
            <FaLinkedin className="text-[#4b6043] hover:text-[#658354] text-2xl xl:text-3xl transform transition-transform duration-300 cursor-pointer" />
          </Link>

          <Link href="https://spotify.com" aria-label="Spotify" passHref>
            <FaSpotify className="text-[#4b6043] hover:text-[#658354] text-2xl xl:text-3xl transform transition-transform duration-300 cursor-pointer" />
          </Link>

          <Link href="https://soundcloud.com" aria-label="SoundCloud" passHref>
            <FaSoundcloud className="text-[#4b6043] hover:text-[#658354] text-2xl xl:text-3xl transform transition-transform duration-300 cursor-pointer" />
          </Link>

          <Link href="https://youtube.com" aria-label="YouTube" passHref>
            <FaYoutube className="text-[#4b6043] hover:text-[#658354] text-2xl xl:text-3xl transform transition-transform duration-300 cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
