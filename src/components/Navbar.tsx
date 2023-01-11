import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="navbar flex justify-between px-20">
      {/* logo  */}
      <div>
        <h1 className="text-2xl tracking-tighter font-semibold">
          <span className="text-white">Seds</span>
          <span className="text-blue-500 text-3xl">C</span>
          <span className="text-red-500 text-3xl">R</span>
        </h1>
      </div>

      {/* links  */}
      <div className="flex gap-8">
        <h1 className="md:text-xl">link</h1>
        <h1 className="md:text-xl">link</h1>
        <h1 className="md:text-xl">link</h1>
      </div>
    </div>
  );
};

export default Navbar;
