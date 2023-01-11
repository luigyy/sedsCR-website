import React from "react";
import NavbarForHero from "./NavbarForHero";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="h-screen px-16 py-10 bg-white">
      <NavbarForHero />
      <div className="h-[calc(100vh-80px)] flex">
        {/* left div  */}
        <div className=" md:w-1/2  pt-32">
          <h1
            style={{ fontFamily: "Lemon Milk" }}
            className="uppercase text-left text-7xl mb-2"
          >
            L<span className="text-accent">o</span>rem ipsum
          </h1>
          <h1
            style={{ fontFamily: "Lemon Milk" }}
            className="uppercase text-left text-5xl mb-10 text-primary"
          >
            landing page
          </h1>
          <p className="w-[75%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            perferendis, provident accusamus dicta nobis nisi sapiente similique
            nihil dolore facere!
          </p>
        </div>
        {/* left div  */}
        <div className="h-full w-full md:w-1/2  hidden md:inline  ">
          <img className=" mt-10 h-4/5" src="pic.jpg" />
        </div>
      </div>
      {/* nav  */}
      <div className="fixed bottom-10 flex gap-24">
        <h1
          style={{ fontFamily: "Lemon Milk" }}
          className="text-accent font-semibold"
        >
          Home
        </h1>
        <h1 style={{ fontFamily: "Lemon Milk" }}>Projects</h1>
        <h1 style={{ fontFamily: "Lemon Milk" }}>About</h1>
        <h1 style={{ fontFamily: "Lemon Milk" }}>Contact</h1>
      </div>
      {/* nav  */}
    </div>
  );
};

export default Hero;
