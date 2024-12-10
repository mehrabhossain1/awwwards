import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
  { href: "https://github.com/mehrabhossain", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/mehrabhossain/", icon: <FaLinkedin /> },
  { href: "https://www.twitter.com", icon: <FaTwitter /> },
  { href: "https://www.discord.com", icon: <FaDiscord /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; {new Date().getFullYear()} Mehrab Hossain. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-black"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
