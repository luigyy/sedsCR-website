//navbar for medium devices
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarForMdProps {}

const NavbarForMd: React.FC<NavbarForMdProps> = ({}) => {
  const location = useLocation();
  return (
    <div>
      {/* nav  */}
      <div className="fixed bottom-10 flex gap-24">
        <Link
          style={{ fontFamily: "Lemon Milk" }}
          className={`${
            location.pathname === "/" ? "text-accent font-semibold" : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`${
            location.pathname === "/projects" ? "text-accent font-semibold" : ""
          }`}
          style={{ fontFamily: "Lemon Milk" }}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className={`${
            location.pathname === "/about" ? "text-accent font-semibold" : ""
          }`}
          style={{ fontFamily: "Lemon Milk" }}
        >
          About
        </Link>
        <Link
          className={`${
            location.pathname === "/contact" ? "text-accent font-semibold" : ""
          }`}
          style={{ fontFamily: "Lemon Milk" }}
          to="/contact"
        >
          Contact
        </Link>
      </div>
      {/* nav  */}
    </div>
  );
};

export default NavbarForMd;
