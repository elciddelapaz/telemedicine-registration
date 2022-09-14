const express = require('express')

const DoctorCtrl = require('../controllers/doctor-ctrl')

const router = express.Router()

router.post('/doctors', DoctorCtrl.createDoctor)
router.put('/doctors/:id', DoctorCtrl.updateDoctor)
router.delete('/doctors/:id', DoctorCtrl.deleteDoctor)
router.get('/doctors/:id', DoctorCtrl.getDoctorById)
router.get('/doctors', DoctorCtrl.getDoctors)

module.exports = router