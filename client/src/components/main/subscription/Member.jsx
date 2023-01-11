import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteMember } from '../../../features/member/memberSlice';
import AddSubscriptions from './AddSubscriptions';
// Mui 
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import EditIcon from '@mui/icons-material/Edit';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// Movie card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// bootstrap
import Col from 'react-bootstrap/Col';

function Member(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (id, action) => {
        if (action === 'Edit') {
            navigate('/main/editmember', {
                state: {
                    member: props.member,
                },
            });
        }

        if (action === 'Delete') {
            dispatch(deleteMember(id));
        }
    };

    const actions = [
        { icon: <EditIcon />, name: 'Edit' },
        { icon: <DeleteOutlineIcon />, name: 'Delete' },
    ];

    return (
        <Col>
            <Card className='my-3 '>
                <CardContent sx={{ height: 80 }}>
                    <h1 className='display-6 fs-5 fw-normal'>{props.member.name}</h1>
                    <h1 className='display-6 fs-6 fw-light'><strong className='fs-6 fw-normal'>Email: </strong>{props.member.email}</h1>
                    <h1 className='display-6 fs-6 fw-light'><strong className='fs-6 fw-normal'>City: </strong>{props.member.city}</h1>
                </CardContent>
                <CardActions>
                    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                        <SpeedDial
                            direction='down'
                            ariaLabel="SpeedDial basic example"
                            sx={{ position: 'absolute', top: -80, right: 2 }}
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
                <AddSubscriptions member={props.member.memberId} />
            </Card>
        </Col >
    )
}

export default Member