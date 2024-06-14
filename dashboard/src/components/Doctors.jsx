import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="page doctors" style={{ backgroundImage: "url('/dashboard-bg.jpg')", backgroundSize: "cover" }}>
      <h1 style={{overflow: "hidden"}}>DOCTORS</h1>
      <div className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="card">
                <img
                  src={element.docAvatar && element.docAvatar.url}
                  alt="doctor avatar"
                />
                <h4 style={{ overflow: "hidden" }}>{`${element.firstName} ${element.lastName}`}</h4>
                <div className="details">
                  <p style={{ overflow: "hidden" }}>
                    Email: <span style={{ overflow: "hidden" }}>{element.email}</span>
                  </p>
                  <p style={{ overflow: "hidden" }}>
                    Phone: <span style={{ overflow: "hidden" }}>{element.phone}</span>
                  </p>
                  <p style={{ overflow: "hidden" }}>
                    DOB: <span style={{ overflow: "hidden" }}>{element.dob.substring(0, 10)}</span>
                  </p>
                  <p style={{ overflow: "hidden" }}>
                    Department: <span style={{ overflow: "hidden" }}>{element.doctorDepartment}</span>
                  </p>
                  <p style={{ overflow: "hidden" }}>
                    NIC: <span style={{ overflow: "hidden" }}>{element.nic}</span>
                  </p>
                  <p style={{ overflow: "hidden" }}>
                    Gender: <span style={{ overflow: "hidden" }}>{element.gender}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;