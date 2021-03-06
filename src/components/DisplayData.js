import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'

function DisplayData(props) {
    const { contacts, deleteContact } = props

    return (
        <Grid container spacing={2}>
            <Grid item xs={4} fontWeight='bold'>
                Name
            </Grid>
            <Grid item xs={3} fontWeight='bold'>
                Address
            </Grid>
            <Grid item xs={4} fontWeight='bold'>
                Phone Number
            </Grid>

            {contacts.map(contact => (
                <Fragment key={contact.id}>
                    <Grid item xs={4}>
                        {contact.name}
                    </Grid>
                    <Grid item xs={3}>
                        {contact.address}
                    </Grid>
                    <Grid item xs={4}>
                        {contact.pnumber}
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={() => deleteContact(contact.id)}>
                            <DeleteIcon
                                fontSize='small'
                                color='error'
                            />
                        </IconButton>
                    </Grid>
                </Fragment>
            ))}
        </Grid>
    );
}

export default DisplayData;