import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsers, reset } from '../../../features/user/userSlice';
import { toast } from 'react-toastify';
import Loading from '../../loading/Loading';
import User from './User';
// bootstrap
import Row from 'react-bootstrap/Row';
// scss
import '../../../style/_usersManage.scss';

function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, isLoading, isError, message } = useSelector(
    (state) => state.user
  );

  // Get users
  useEffect(() => {
    dispatch(getUsers());

    if (isError) {
      toast.error(message)
    };

    return () => {
      dispatch(reset())
    }
  }, [isError, message, navigate, dispatch]);

  if (isLoading) {
    <Loading />
  };

  return (
    <>
      <div className='d-flex justify-content-center pt-3 usersManage'>
        <div className='col-11 col-md-10'>
          <Row xs={1} md={2} lg={3} >
            {users?.map((user, index) => {
              return <User key={index} user={user} />
            })}
          </Row>
        </div>
      </div>
    </>
  )
}

export default Users