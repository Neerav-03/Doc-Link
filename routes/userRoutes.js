const express=require('express')
const { loginController, registerController, authController,applyDoctorController,getAllDoctorsController,
    getAllNotificationController,deleteAllNotificationController,bookAppointmentController,
    bookingAvailabilityController,userAppointmentsController,getUserProfileInfoController } = require('../controllers/userCtrl')
const authMiddleware = require('../middlewares/authMiddleware') 

const router=express.Router()
//routes
//Login||POST
router.post("/login",loginController)
//register||POSt
router.post("/register",registerController)

//AUTH||POST
router.post("/getUserData",authMiddleware,authController)

//apply doctor||POST
router.post("/apply-doctor",authMiddleware,applyDoctorController)

//Notification doctor||POST
router.post("/get-all-notification",authMiddleware,getAllNotificationController)

//Notification doctor||POST
router.post("/delete-all-notification",authMiddleware,deleteAllNotificationController)

//Get All Doc
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)
//Book Appointment
router.post('/book-appointment',authMiddleware,bookAppointmentController)
//booking availability
router.post('/booking-availability',authMiddleware,bookingAvailabilityController)
//Appointment List
router.get('/user-appointments',authMiddleware,userAppointmentsController)
//post user profile info
router.post('/getUserProfileInfo',authMiddleware,getUserProfileInfoController)

module.exports=router