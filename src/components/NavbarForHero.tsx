import React from "react";

interface NavbarForHeroProps {}

const NavbarForHero: React.FC<NavbarForHeroProps> = ({}) => {
  return (
    <div className=" flex justify-between items-center">
      <div className="font-semibold text-2xl">
        <span className="font-semibold">SEDS</span>
        <span className="text-primary ">CR</span>
      </div>
      <div className="">
        <span className="mx-2 bg-primary text-primary-content font-semibold px-4 py-3 rounded-3xl">
          lorem ipsum
        </span>
        <span className="mx-2 bg-accent text-accent-content font-semibold  px-4 py-3 rounded-3xl">
          lorem ipsum
        </span>
      </div>
    </div>
  );
};

export default NavbarForHero;
