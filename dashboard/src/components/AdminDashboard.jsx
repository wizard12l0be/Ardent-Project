// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page" style={{ backgroundImage: "url('/dashboard-bg1.jpg')", backgroundSize: "cover" }}>
        <div className="banner" style={{ height: "300px", width: "2000px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="firstBox" style={{height: "230px", marginLeft: "15px", overflow: "hidden"}}>
            <img src="/logo copy.png" alt="docImg"  className="logo_dashboard"/>
            <div className="content">
              <div>
                <p>Hello,</p>
                <h5>
                  {admin &&
                    `${admin.firstName} ${admin.lastName}`}{" "}
                </h5>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, nam molestias. Eaque molestiae ipsam commodi neque.
                Assumenda repellendus necessitatibus itaque.
              </p>
            </div>
          </div>
          <div className="secondBox" style={{ height: "230px" }}>
            <p>Total Appointments</p>
            <h3>1500</h3>
          </div>
          <div className="thirdBox" style={{ height: "230px",marginRight: "15px" }}>
            <p>Registered Doctors</p>
            <h3>10</h3>
          </div>
        </div>
        <div className="banner" style={{ boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px rgb(192, 190, 190)", backgroundImage: "url('/appointment-bg3.jpg')", backgroundSize: "cover", objectFit: "cover" }}>
          <h5 style={{ color: "#1e33f4", fontWeight: "bolder"}}>APPOINTMENTS</h5>
          <table>
            <thead>
              <tr>
                <th style={{ color: "#1e33f4"}}>Patient</th>
                <th style={{ color: "#1e33f4" }}>Date</th>
                <th style={{ color: "#1e33f4" }}>Doctor</th>
                <th style={{ color: "#1e33f4" }}>Department</th>
                <th style={{ color: "#1e33f4" }}>Status</th>
                <th style={{ color: "#1e33f4" }}>Visited</th>
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.length > 0
                ? appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                    <td>{appointment.appointment_date.substring(0, 16)}</td>
                    <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                    <td>{appointment.department}</td>
                    <td>
                      <select
                        className={
                          appointment.status === "Pending"
                            ? "value-pending"
                            : appointment.status === "Accepted"
                              ? "value-accepted"
                              : "value-rejected"
                        }
                        value={appointment.status}
                        onChange={(e) =>
                          handleUpdateStatus(appointment._id, e.target.value)
                        }
                      >
                        <option value="Pending" className="value-pending">
                          Pending
                        </option>
                        <option value="Accepted" className="value-accepted">
                          Accepted
                        </option>
                        <option value="Rejected" className="value-rejected">
                          Rejected
                        </option>
                      </select>
                    </td>
                    <td>{appointment.hasVisited === true ? <GoCheckCircleFill className="green" /> : <AiFillCloseCircle className="red" />}</td>
                  </tr>
                ))
                : "No Appointments Found!"}
            </tbody>
          </table>

          { }
        </div>
      </section>
    </>
  );
};

export default Dashboard;
