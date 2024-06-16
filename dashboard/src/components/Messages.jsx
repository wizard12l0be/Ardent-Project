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
      <div className="w3-container w3-center w3-animate-zoom">
      <h1 style={{ overflow: "hidden"}} className="heading">MESSAGE</h1>
      </div>
      <div className="banner" style={{ overflow: "hidden"}}>
        {messages && messages.length > 0 ? (
          messages.map((element) => {
            return (
              <div className=" msz_card" style={{ overflow: "hidden"}} key={element._id} >
                <div className="details">
                  <p style={{ color: "#1e33f4" }}>
                    First Name: <span>{element.firstName}</span>
                  </p>
                  <p >
                    Last Name: <span>{element.lastName}</span>
                  </p>
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p >
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p >
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