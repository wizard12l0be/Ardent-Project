import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { Navigate } from "react-router-dom";
import { Context } from "../main";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!isAuthenticated) return;
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          {
            withCredentials: true,
          }
        );
        console.log(response);
        if (Array.isArray(response.data.appointments)) {
          setAppointments(response.data.appointments); // Ensure response.data is an array
        } else {
          console.error("Data is not an array:", response.data.appointments);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAppointments();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <h2>Appointments Confirm</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Doctor
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Patient
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Date</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Department
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Status
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Visited
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(appointments) &&
            appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {appointment.doctor.firstName +
                    " " +
                    appointment.doctor.lastName}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {appointment.firstName + " " + appointment.lastName}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {appointment.appointment_date}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {appointment.department}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {appointment.status}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    marginLeft: "3px",
                  }}
                >
                  {appointment.hasVisited ? (
                    <GoCheckCircleFill className="green" />
                  ) : (
                    <AiFillCloseCircle className="red" />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
