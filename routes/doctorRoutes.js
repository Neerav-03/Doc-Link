const express=require('express')
const authMiddleware = require('../middlewares/authMiddleware') 
const { getDoctorInfoController,updateProfileController,getDoctorByIdController,
        doctorAppointmentsController,updateStatusController} = require('../controllers/doctorCtrl')

const router=express.Router()
//Post single doc info
router.post('/getDoctorInfo',authMiddleware,getDoctorInfoController)
//Post update profile
router.post('/updateProfile',authMiddleware,updateProfileController)
//POST get single doc info
router.post('/getDoctorById',authMiddleware,getDoctorByIdController)
//get aappointments
router.get('/doctor-appointments',authMiddleware,doctorAppointmentsController)
//Post update status
router.post('/update-status',authMiddleware,updateStatusController)
module.exports=router