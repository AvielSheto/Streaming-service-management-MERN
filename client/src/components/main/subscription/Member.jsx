import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteMember } from '../../../features/member/memberSlice';
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
// bootstrap
import Col from 'react-bootstrap/Col';

function Member(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = (id, action) => {
        if (action === 'Edit') {
            navigate(`/main/editmember/${id}`);
        }

        if (action === 'Delete') {
            dispatch(deleteMember(id));
        }
    }

    const actions = [
        { icon: <EditIcon />, name: 'Edit' },
        { icon: <DeleteOutlineIcon />, name: 'Delete' },
    ];

    return (
        <Col>
            <Card className='m-1'>
                <CardContent sx={{ height: 140 }}>
                    <h1 className='display-6 fs-5 fw-normal'>{props.member.name}</h1>
                    <h1 className='display-6 fs-6 fw-light'><strong className='fs-6 fw-normal'>Email: </strong>{props.member.email}</h1>
                    <h1 className='display-6 fs-6 fw-light'><strong className='fs-6 fw-normal'>City: </strong>{props.member.city}</h1>
                </CardContent>
                <CardActions>
                    <Box sx={{ height: 50, transform: 'translateZ(0px)', flexGrow: 1 }}>
                        <SpeedDial
                            ariaLabel="SpeedDial basic example"
                            sx={{ position: 'absolute', bottom: 2, right: 2 }}
                            icon={<SpeedDialIcon />}>
                            {actions.map((action) => (
                                <SpeedDialAction
                                    onClick={() => { handleClick(props.member._id, action.name) }}
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    id={props.member.id} />
                            ))}
                        </SpeedDial>
                    </Box>
                </CardActions>
            </Card>
        </Col>
    )
}

export default Member