import React from "react";
import AnimatedPage from "../components/AnimatedPage";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <AnimatedPage>
      <div className="h-screen px-16 py-10">Contact</div>
    </AnimatedPage>
  );
};

export default Contact;
