const Registration = require('../models/registration-model')

createRegistration = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a registration input',
        })
    }

    const registration = new Registration(body)

    if (!registration) {
        return res.status(400).json({ success: false, error: err })
    }

    registration
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: registration._id,
                message: 'Registration submitted!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Registration not submitted!',
            })
        })
}

updateRegistration = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Registration.findOne({ _id: req.params.id }, (err, registration) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Registration not found!',
            })
        }
        registration.timestamp = body.timestamp
        registration.patientType = body.patientType
        registration.firstName = body.firstName
        registration.middleInitial = body.middleInitial
        registration.lastName = body.lastName
        registration.birthday = body.birthday
        registration.email = body.email
        registration.phone = body.phone
        registration.reasons = body.reasons
        registration.physician = body.physician
        registration.confirmation = body.confirmation
        registration
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: registration._id,
                    message: 'Registration updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Registration not updated!',
                })
            })
    })
}

deleteRegistration = async (req, res) => {
    await Registration.findOneAndDelete({ _id: req.params.id }, (err, registration) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!registration) {
            return res
                .status(404)
                .json({ success: false, error: `Registration not found` })
        }

        return res.status(200).json({ success: true, data: registration })
    }).catch(err => console.log(err))
}

getRegistrationById = async (req, res) => {
    await Registration.findOne({ _id: req.params.id }, (err, registration) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!registration) {
            return res
                .status(404)
                .json({ success: false, error: `Registration not found` })
        }
        return res.status(200).json({ success: true, data: registration })
    }).catch(err => console.log(err))
}

getRegistrations = async (req, res) => {
    await Registration.find({}, (err, Registration) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Registration.length) {
            return res
                .status(404)
                .json({ success: false, error: `Registration not found` })
        }
        return res.status(200).json({ success: true, data: Registration })
    }).catch(err => console.log(err))
}

module.exports = {
    createRegistration,
    updateRegistration,
    deleteRegistration,
    getRegistrations,
    getRegistrationById,
}
