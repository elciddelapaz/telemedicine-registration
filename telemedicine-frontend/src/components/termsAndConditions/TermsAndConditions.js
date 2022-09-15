import { Stack, Typography, Button, Backdrop, Box, List, ListItem, TabScrollButton } from '@mui/material'
import React from 'react'

export default function TermsAndConditions() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Button onClick={handleToggle}>Show Terms and Conditions</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                {/* <CircularProgress color="inherit" /> */}
                <Box
                    sx={{
                        borderRadius: '10px',
                        width: "40rem",
                        height: "50rem",

                        backgroundColor: '#ffffff',
                        // '&:hover': {
                        //     backgroundColor: '#ffffff',
                        //     opacity: [0.9, 0.8, 0.7],
                        // },
                    }}
                >
                    <Stack spacing={2} sx={{height:'10px', color: '#000000', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                        <Typography variant="h4" align='center'>Terms and Conditions</Typography>
                        <Stack spacing={2} align='justify'>
                            <Typography variant="body1" alignt='inherit'> On this date, I voluntarily avail of the teleconsultation with the AdventistMed specialist.</Typography>
                            <Typography variant="body1" alignt='inherit'>The following sets forth the terms and conditions of my engagement.</Typography>

                            <Typography variant="body1" alignt='inherit'>I acknowledged that teleconsultation is not an adequate substitute for a face-to-face consultation at the outpatient clinic due to its inherent limitations like inadequacy of physical examinations, and/or lack of access to medical tools, among others.</Typography>

                            <Typography variant="body1" alignt='inherit'>I acknowledged that the initial management may be limited to a verbal and/or written advisory and medical prescription. It is incumbent upon me to keep my follow-up appointment once the face-to-face consultation resume. Further, I acknowledged that I must immediately inform my Specialist via text or call if symptoms are not relieved as expected, or if any deteriorations occur.</Typography>

                            <Typography variant="body1" alignt='inherit'>I further accept the following rules and regulations regarding my teleconsultation with my Specialist:</Typography>

                            <List>
                                <ListItem>1. Setting Up</ListItem>
                                <ListItem>• The patient is required to register online and provide the necessary data.</ListItem>
                                <ListItem>• The patient shall receive a call for validation of the provided data, instructions on online payment, and scheduling from our coordinators from Monday to Friday 8:00 AM - 5:00 PM.</ListItem>
                                <ListItem>• The patient shall download Google Meet which will be the medium of communication during the teleconsultation. (Download the app if using phone or tablet. This is not applicable for desktop users.)</ListItem>
                                <ListItem>• The patient will receive a meeting link on the provided contact details during the scheduled teleconsultation.</ListItem>
                            </List>

                            <List>
                                <ListItem>
                                    <List>
                                        2. During the Teleconsultation
                                        • Details of the patient’s medical history, examinations, x-rays, and laboratory tests shall be discussed by the patient and/or his/her guardian with the Specialist and/or other health professionals, using interactive video, audio, and telecommunications technology.
                                        • Since there will be no physical examination of the patient due to the inability of physical access, the Specialist shall have the right to request the patient and/or guardian to send a video or clear pictures of the patient’s symptoms through the email provided during the teleconsultation.
                                        • Non-medical technical personnel may be present in the telemedicine site to aid in the video transmission of the teleconsultation between the patient and the Specialist.
                                        • The patient shall not record any video, audio and/or digital photographs for the duration of the teleconsultation. In case such recording is done, the teleconsultation shall be rendered ineffective and shall not, at any instance, bind the Specialist.
                                    </List>
                                </ListItem>
                                <ListItem>3. Prescription of Medicines.  The Specialist shall prescribe the medicines needed by the patient based on the teleconsultation. After the teleconsultation, the prescription shall be sent by the Specialist or the secretary to the patient via text message or email.</ListItem>

                                <ListItem>4. The Patient’s Medical information and Records: All existing laws regarding medical information and copies of the patient’s medical records apply to the teleconsultation. The dissemination of any patient-identifiable images or information from the teleconsultation to researchers or other entities shall not be done by the Specialist without the patient’s consent, unless authorized under existing laws such as but not limited to the Philippine Data Privacy Act.</ListItem>

                                <ListItem>5. Confidentiality. Reasonable and appropriate efforts have been made by the Specialist to eliminate any confidentiality risks associated with the teleconsultation.  The existing confidentiality protection under Philippine laws shall apply to the information disclosed by the patient during the teleconsultation.</ListItem>

                                <ListItem>6. Risks and Consequences. The teleconsultation is an alternative measure to routine medical office visits using interactive video technology which will allow the patient to communicate with the Specialist at a distance.  The patient may find it difficult or uncomfortable to communicate using video images as the use of video technology to deliver healthcare and educational services is a new method.  However, the teleconsultation may not be considered as equivalent to direct patient-to-physician contact (where the patient’s actual condition may be examined by the Specialist).  The Specialist shall have the prerogative to recommend that the patient visit the nearest hospital for further evaluation after the teleconsultation.</ListItem>

                                <ListItem>7. The Patient’s Prerogative.  The patient may suspend or end the teleconsultation with the Specialist at any time during his/her slot, without affecting his/her right to future care or treatment.  The patient may likewise opt to consult with another doctor in person, should the Specialist deem that a face-to-face consultation between the patient and a medical professional is necessary.</ListItem>

                                <ListItem>8. Medical Fee. The fee for a teleconsultation shall be paid by the patient to the Specialist prior to his/her scheduled teleconsultation. The payment shall be made through 𝐉𝐚𝐳𝐳𝐲𝐏𝐚𝐲 (www.jazzypay.com) or 𝐆𝐂𝐚𝐬𝐡. This will be validated through a phone call by our staff prior to or at the start of the teleconsultation, the patient and/or his/her guardian shall send a copy of the online transaction to the Specialist or the secretary.</ListItem>
                            </List>
                        </Stack>
                        <Button variant="contained" onClick={handleClose}>I agree</Button>
                    </Stack>
                </Box>
            </Backdrop>
        </div>
    );
}