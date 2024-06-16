import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  postAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
  isDoctorAuthenticated
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", getAllAppointments);
router.put("/update/:id", isDoctorAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isDoctorAuthenticated, deleteAppointment);

export default router;
