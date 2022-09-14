const express = require('express')

const RegistrationCtrl = require('../controllers/registration-ctrl')

const router = express.Router()

router.post('/registration', RegistrationCtrl.createRegistration)
router.put('/registration/:id', RegistrationCtrl.updateRegistration)
router.delete('/registration/:id', RegistrationCtrl.deleteRegistration)
router.get('/registration/:id', RegistrationCtrl.getRegistrationById)
router.get('/registration', RegistrationCtrl.getRegistrations)

module.exports = router