// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppoinmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"/images/Appointment.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;