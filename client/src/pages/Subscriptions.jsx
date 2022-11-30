import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMembers, reset } from '../features/member/memberSlice';
import { toast } from 'react-toastify'
import Loading from '../components/loading/Loading';
import Member from '../components/main/subscription/Member';
// Scss
import '../style/_subscriptions.scss'
// bootstrap
import Row from 'react-bootstrap/Row';

function Subscriptions() {
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

  }, [ navigate, dispatch]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className='d-flex justify-content-center subscriptions'>
        <div className='col-11 col-md-10'>
          <Row xs={1} md={2} >
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

export default Subscriptions