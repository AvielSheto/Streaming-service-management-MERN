import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteMovie } from '../../../features/movie/movieSlice';
// Component
import MovieSubscription from './MovieSubscription';
// Mui 
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';

function Movie(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [showHistory, setShowHistory] = useState(false);

    const handleClick = (movieId, action) => {
        if (action === 'Edit') {
            navigate(`/main/editmovie/${movieId}`, {
                state: {
                    movie: props.movie,
                },
            });
        };
        if (action === 'Delete') {
            dispatch(deleteMovie(movieId));
            props.callback(search);
        };
        if (action === 'History') {
            setShowHistory(!showHistory)
        };
    };

    const actions = [
        { icon: <EditIcon />, name: 'Edit' },
        { icon: <DeleteOutlineIcon />, name: 'Delete' },
        { icon: <HistoryRoundedIcon />, name: 'History' },

    ];

    return (
        <>
            <div className="py-2 ">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="p-1 rounded-xl group d-flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                        <img src={props.movie.image} alt="art cover" loading="lazy" className=" object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                        <div className="space-y-2 pt-4 d-flex flex-column">
                            <div className=''>
                                <h4 className="text-2xl font-semibold text-cyan-900">{props.movie.name}</h4>
                                <p className="text-gray-600">premiered: {props.movie.premiered}</p>
                                <p className="text-gray-600">genres: {props.movie.genres.join()}</p>
                            </div>
                        </div>
                    </div>
                    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                        <SpeedDial
                            ariaLabel="SpeedDial basic example"
                            sx={{ position: 'absolute', bottom: 5, right: 15 }}
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
                    {showHistory && <MovieSubscription subscriptions={props.subscriptions} />}
                </div>
            </div>
        </>
    )
}

export default Movie