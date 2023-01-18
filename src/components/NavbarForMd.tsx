//navbar for medium devices
import React from "react";
import { Link } from "react-router-dom";

interface NavbarForMdProps {}

const NavbarForMd: React.FC<NavbarForMdProps> = ({}) => {
  return (
    <div>
      {/* nav  */}
      <div className="fixed bottom-10 flex gap-24">
        <Link
          style={{ fontFamily: "Lemon Milk" }}
          className="text-accent font-semibold"
          to="/"
        >
          Home
        </Link>
        <Link to="/projects" style={{ fontFamily: "Lemon Milk" }}>
          Projects
        </Link>
        <Link to="/about" style={{ fontFamily: "Lemon Milk" }}>
          About
        </Link>
        <Link style={{ fontFamily: "Lemon Milk" }} to="/contact">
          Contact
        </Link>
      </div>
      {/* nav  */}
    </div>
  );
};

export default NavbarForMd;
