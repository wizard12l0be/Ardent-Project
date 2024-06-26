// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us"}
        imageUrl={"/images/doctor-with-stethoscope-removebg-preview.png"}
      />
      <Biography imageUrl={"public/images/who.jpg"} />
    </>
  );
};

export default AboutUs;