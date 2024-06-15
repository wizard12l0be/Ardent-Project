import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/message/getall",
          { withCredentials: true }
        );
        setMessages(data.messages);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchMessages();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page messages" style={{ backgroundImage: "url('/dashboard-bg.jpg')", backgroundSize: "cover" }}>
      <h1>MESSAGE</h1>
      <div className="banner">
        {messages && messages.length > 0 ? (
          messages.map((element) => {
            return (
              <div className="card" key={element._id} style={{ boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px rgb(190, 190, 190)" }}>
                <div className="details">
                  <p style={{ color: "#1e33f4" }}>
                    First Name: <span>{element.firstName}</span>
                  </p>
                  <p style={{ color: "#1e33f4" }}>
                    Last Name: <span>{element.lastName}</span>
                  </p>
                  <p style={{ color: "#1e33f4" }}>
                    Email: <span>{element.email}</span>
                  </p>
                  <p style={{ color: "#1e33f4" }}>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p style={{ color: "#1e33f4" }}>
                    Message: <span>{element.message}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Messages!</h1>
        )}
      </div>
    </section>
  );
};

export default Messages;