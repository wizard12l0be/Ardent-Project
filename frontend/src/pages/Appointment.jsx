// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppoinmentForm";
import AppointmentList from "../components/AppointmentList";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment"}
        imageUrl={"/images/Appointment.png"}
      />
      <AppointmentForm />
      <AppointmentList />
    </>
  );
};

export default Appointment;
