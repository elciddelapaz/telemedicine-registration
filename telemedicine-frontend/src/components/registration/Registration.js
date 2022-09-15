import React from 'react'
import { TextField, Button, Select, Box, MenuItem, Grid } from '@mui/material'

function Registration() {
    return (
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item container xs={8} spacing={4}>
                <Grid item xs={3}>
                    <TextField id="tfFName" label="First Name" variant="standard" />
                </Grid>
                <Grid item xs={1}>
                    <TextField id="tfMI" label="MI" variant="standard" />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="tfLName" label="Last Name" variant="standard" />
                </Grid>
            </Grid>
            <Grid item container xs={8} >
                <Grid item xs={8}>
                    <TextField id="tfEmail" label="Email" variant="standard" />
                </Grid>
            </Grid>

            {/* <Box width="250px">
                <Select
                    id="demo-simple-select"
                    label="Age"
                    placeholder="hello world"
                    fullWidth
                    autocomplete
                >
                    <MenuItem value="Old">Old</MenuItem>
                    <MenuItem value="New">New</MenuItem>
                </Select>
            </Box>
            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button variant='outlined'>Cancel</Button>
            <Button variant='contained'>Register</Button> */}
        </Grid>
    )
}

export default Registration