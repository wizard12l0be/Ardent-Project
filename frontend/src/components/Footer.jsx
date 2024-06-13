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
      <footer className={"container"} style={{ backgroundColor: "#ADD8E6" }}>
        {/* <hr /> */}
        <div className="content" style={{paddingTop: 35}}>
          <div>
            <img src="images/logo.png" alt="logo" className="logo-img-footer" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"} style={{color:"#08a8c4"}}>Home</Link>
              <Link to={"/appointment"} style={{ color: "#08a8c4" }}>Appointment</Link>
              <Link to={"/about"} style={{ color: "#08a8c4"  }}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id} style={{ color: "#08a8c4"  }}>
                  <span style={{ color: "#08a8c4"  }}>{element.day}</span>
                  <span style={{ color: "#08a8c4" }}>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div style={{ color: "#08a8c4"  }}>
              <FaPhone />
              <span style={{ color: "#08a8c4" }}>999-999-9999</span>
            </div>
            <div style={{ color: "#08a8c4" }}>
              <MdEmail />
              <span>zeelab@gmail.com</span>
            </div>
            <div style={{ color: "#08a8c4" }}>
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
