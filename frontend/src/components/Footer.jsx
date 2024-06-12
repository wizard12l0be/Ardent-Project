// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "../App.css"

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className={"container"} style={{ backgroundColor: "#08a8c4" }}>
        {/* <hr /> */}
        <div className="content" style={{paddingTop: 35}}>
          <div>
            <img src="images/logo.png" alt="logo" className="logo-img-footer" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"} style={{color:"lightgrey"}}>Home</Link>
              <Link to={"/appointment"} style={{ color: "lightgrey" }}>Appointment</Link>
              <Link to={"/about"} style={{ color: "lightgrey" }}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id} style={{ color: "lightgrey" }}>
                  <span style={{ color: "lightgrey" }}>{element.day}</span>
                  <span style={{ color: "lightgrey" }}>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div style={{ color: "lightgrey" }}>
              <FaPhone />
              <span style={{ color: "lightgrey" }}>999-999-9999</span>
            </div>
            <div style={{ color: "lightgrey" }}>
              <MdEmail />
              <span>zeelab@gmail.com</span>
            </div>
            <div style={{ color: "lightgrey" }}>
              <FaLocationArrow />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
