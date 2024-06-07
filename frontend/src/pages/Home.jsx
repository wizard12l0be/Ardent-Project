// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Department from "../components/Departments";
import MessageForm from "../components/MessageForm";

function Home() {
  return <>
    
      <Hero title={"Welcome to Patient-Centric Health Management "} imageUrl={"/images/hero1.png"}/>
      <Biography imageUrl={"/images/About.png"}/>
      <Department/>
      <MessageForm/>
    
      </>
}

export default Home
