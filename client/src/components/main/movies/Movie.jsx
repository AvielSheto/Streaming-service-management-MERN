import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteMovie } from '../../../features/movie/movieSlice'
// Mui 
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
// Movie card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// bootstrap
import Col from 'react-bootstrap/Col';

function Movie(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const handleClick = (movieId, action) => {
        if (action === 'Edit') {
            navigate(`/main/editmovie/${movieId}`);
        }

        if (action === 'Delete') {
            dispatch(deleteMovie(movieId));
            props.callback(search);
        }
    }

    const actions = [
        { icon: <EditIcon />, name: 'Edit' },
        { icon: <DeleteOutlineIcon />, name: 'Delete' },
    ];

    return (
        <>
            <Col>
                <Card className='m-1' >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={props.movie.image}
                    // height="350"
                    />
                    <CardContent sx={{ height: 140 }}>
                        <h1 className='display-6 fs-5 fw-normal'>{props.movie.name}</h1>
                        <h1 className='display-6 fs-6 fw-light'><strong className='fs-6 fw-normal'>premiered: </strong>{props.movie.premiered}</h1>
                        <h1 className='display-6 fs-6 fw-light'><strong className=''>genres: </strong>{props.movie.genres.join()}</h1>
                    </CardContent>
                    <CardActions>
                        <Box sx={{ height: 50, transform: 'translateZ(0px)', flexGrow: 1 }}>
                            <SpeedDial
                                ariaLabel="SpeedDial basic example"
                                sx={{ position: 'absolute', bottom: 2, right: 2 }}
                                icon={<SpeedDialIcon />}>
                                {actions.map((action) => (
                                    <SpeedDialAction
                                        onClick={() => { handleClick(props.movie._id, action.name) }}
                                        key={action.name}
                                        icon={action.icon}
                                        tooltipTitle={action.name}
                                        id={props.movie.id} />
                                ))}
                            </SpeedDial>
                        </Box>
                    </CardActions>
                </Card>
            </Col>
        </>
    )
}

export default Movie