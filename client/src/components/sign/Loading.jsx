import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './_loading.scss';
// mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Loading() {
    const navigate = useNavigate();
    const { id } = useParams();

    const loadingTimeOut = () => {
        setTimeout(() => {            
            if (id === "634e6d59abd70bbe599afe53") {
                navigate('/main')
            }else{
                navigate('/')
            }
            
        }, "1000");
    }
    loadingTimeOut()

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
