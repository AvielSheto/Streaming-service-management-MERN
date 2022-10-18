import { useNavigate } from 'react-router-dom';
import './_loading.scss';
// mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Loading() {
    const navigate = useNavigate()
    const loadingTimeOut = () => {
        setTimeout(() => {
            navigate('/')
        }, "1500");
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
