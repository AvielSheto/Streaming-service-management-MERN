import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loading from '../../loading/Loading';
// Reducer
import { getMovies, reset } from '../../../features/movie/movieSlice';
import { createSubscription, getSubscriptions, reset as subReset } from '../../../features/subscription/subscriptionSlice';
// mui
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardContent from '@mui/material/CardContent';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function AddSubscription(props) {
    const dispatch = useDispatch();
    const [viewNewSub, setViewNewSub] = useState(false);
    const [subscription, setSubscription] = useState([])
    const [subscriptionData, setSubscriptionData] = useState({
        memberId: props.member,
        movie: ''
    })

    // Get movies
    const { movies, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.movie
    );
    useEffect(() => {
        dispatch(getMovies());

        if (isError) {
            toast.error(message);
        }

        return () => {
            dispatch(reset())
        }

    }, [isError, message, isSuccess]);

    // Get subscriptions
    const { subscriptions, isSubscriptionLoading, isSubscriptionError, subscriptionMessage, isSubscriptionSuccess } = useSelector(
        (state) => state.subscription
    );

    useEffect(() => {
        dispatch(getSubscriptions());
        setSubscription(subscriptions.filter((sub) => sub.memberId === props.member));

        if (isSubscriptionError) {
            toast.error(subscriptionMessage);
        }


    }, [isSubscriptionError, subscriptionMessage, isSubscriptionSuccess]);

    const handleSubscription = () => {
        dispatch(createSubscription(subscriptionData));
        setViewNewSub(!viewNewSub);
    };

    const handleChange = (e) => {
        setSubscriptionData({ ...subscriptionData, movie: e.target.value })
    };

    if (isLoading || isSubscriptionLoading) {
        return <Loading />
    };

    return (
        <>
            <CardContent >
                {subscription.length > 0 &&
                    <>
                        <div className='d-flex justify-content-center'>
                            <hr className='col-12 text-center' />
                        </div>
                        <h1 className='display-6 fs-5 fw-normal'>Movies watched</h1>
                        {subscriptions.filter((subscription) => subscription.memberId === props.member).map((subscription) => {
                            return (
                                <List key={subscription?._id} sx={{ width: '100%' }}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <MovieCreationOutlinedIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={subscription?.movie} secondary={subscription?.createdAt} />
                                    </ListItem>
                                </List>
                            )
                        })}
                    </>
                }
            </CardContent>

            <CardContent >
                <Button onClick={() => { setViewNewSub(!viewNewSub) }}>Subscribe to new movie</Button>
                {viewNewSub &&
                    <>
                        <h1 className='display-6 fs-2 fw-normal my-2 ms-2'>Add new movie</h1>
                        <div>
                            <FormControl sx={{ m: 1, width: 200 }}>
                                <InputLabel >Movies</InputLabel>
                                <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    value={subscriptionData.movie}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Name" />}
                                    MenuProps={MenuProps}
                                >
                                    {movies?.map((movie) => (
                                        <MenuItem
                                            key={movie._id}
                                            value={movie.name}
                                        >
                                            {movie.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Button onClick={() => { handleSubscription() }} className='p-3' variant="outlined">Subscribe</Button>
                            </FormControl>
                        </div>
                    </>
                }
            </CardContent>
        </>
    )
}

export default AddSubscription