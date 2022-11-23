import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { getMembers, reset } from '../../../features/member/memberSlice';

import Loading from '../../loading/Loading';
import Member from './Member';
// bootstrap
import Row from 'react-bootstrap/Row';


function Members() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { members, isLoading, isError, message } = useSelector(
    (state) => state.member
  )

  useEffect(() => {
    dispatch(getMembers());

    if (isError) {
      toast.error(message);
    }

    return () => {
      dispatch(reset())
    }

  }, [isError, message, navigate, dispatch]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='col-11 col-md-11'>
          <Row xs={2} md={3} lg={4}>
            {members?.map((member) => {
              return (
                <Member key={member._id} member={member} />
              )
            })}
          </Row>
        </div>
      </div>
    </>
  )
}

export default Members