const Doctor = require('../models/doctor-model')

createDoctor = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a doctor',
        })
    }

    const doctor = new Doctor(body)

    if (!doctor) {
        return res.status(400).json({ success: false, error: err })
    }

    doctor
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: doctor._id,
                message: 'Doctor created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Doctor not created!',
            })
        })
}

updateDoctor = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Doctor.findOne({ _id: req.params.id }, (err, doctor) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Doctor not found!',
            })
        }
        doctor.name = body.name
        doctor.specialization = body.specialization
        doctor.email = body.email
        doctor.licenseNumber = body.licenseNumber
        doctor.lnExpiration = body.lnExpiration
        doctor.s2Number = body.s2Number
        doctor.s2Expiration = body.s2Expiration
        doctor.ptr = body.ptr
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: doctor._id,
                    message: 'Doctor updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Doctor not updated!',
                })
            })
    })
}

deleteDoctor = async (req, res) => {
    await Doctor.findOneAndDelete({ _id: req.params.id }, (err, doctor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!doctor) {
            return res
                .status(404)
                .json({ success: false, error: `Doctor not found` })
        }

        return res.status(200).json({ success: true, data: doctor })
    }).catch(err => console.log(err))
}

getDoctorById = async (req, res) => {
    await Doctor.findOne({ _id: req.params.id }, (err, doctor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!doctor) {
            return res
                .status(404)
                .json({ success: false, error: `Doctor not found` })
        }
        return res.status(200).json({ success: true, data: doctor })
    }).catch(err => console.log(err))
}

getDoctors = async (req, res) => {
    await Doctor.find({}, (err, doctors) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!doctors.length) {
            return res
                .status(404)
                .json({ success: false, error: `Doctor not found` })
        }
        return res.status(200).json({ success: true, data: doctors })
    }).catch(err => console.log(err))
}

module.exports = {
    createDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctors,
    getDoctorById,
}