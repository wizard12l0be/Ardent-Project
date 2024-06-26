
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { toast } from "react-toastify";
import "../App.css";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container form-component message-form">
        <h2 style={{color:"#1e33f4"}}>Send Us A Message</h2>
        <form onSubmit={handleMessage}>
          <div>
            <input
              style={{ borderRadius: 10, marginLeft: 25, marginRight: 10 ,backgroundColor:"white"}}
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              style={{ borderRadius: 10, marginRight: 25,backgroundColor:"white" }}
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              style={{ borderRadius: 10, marginLeft: 25, marginRight: 10 ,backgroundColor:"white"}}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              style={{ borderRadius: 10, marginRight: 25 ,backgroundColor:"white"}}
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <textarea
            style={{ borderRadius: 10, marginLeft: 25, marginRight: 25, height: 40 ,backgroundColor:"white"}}
            className="message"
            rows={7}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button 
            className="mszBtn"
            type="submit">Send</button>
          </div>
        </form>
        <img src="/Vector.png" alt="vector" />
      </div>
    </>
  );
};

export default MessageForm;
