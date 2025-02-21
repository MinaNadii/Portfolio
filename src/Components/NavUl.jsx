import { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Work",
    href: "/work",
  },
];
const NavUl = () => {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <div>
        <ul className="flex text-xs uppercase flex-col items-center  justify-center space-y-2">
          {NavLinks.map((link, index) => (
            <li key={index} className="py-1">
              <Link
              
                to={link.href}
                className={` relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:h-[1px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full tracking-wider font-medium text-black/60 transition ${
                  location.pathname === link.href
                    ? "font-bold text-blue-400"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavUl;
