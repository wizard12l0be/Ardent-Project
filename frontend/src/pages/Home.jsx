import React from 'react'
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Department from "../components/Departments";
import MessageForm from "../components/MessageForm";

function Home() {
  return <>
    
      <Hero title={"Welcome toPatient-Centric Health Management "} imageUrl={"/images/hero1.png"}/>
      <Biography/>
      <Department/>
      <MessageForm/>
    
      </>
}

export default Home
