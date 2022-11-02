import React from 'react';
import './_loading.scss';
// mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Loading() {
    return (
        <Container className='form' maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <div class="loading"> </div>
            </Box>
        </Container>
    )
}
