import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { getMember } from '../../../features/memberEdit/memberEditSlice';

function MovieSubscription(props) {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // props.subscriptions.map((item) => {
    //   getUser(item.memberId, item.createdAt)
    // })
  }, []);

  // const getUser = async (id, createdAt) => {
  //   const data = await dispatch(getMember(id));
  //   const subscriptionData = { userName: data.payload[0].name, createdAt };
  //   setUsers(current => [...current, subscriptionData]);
  // }

  return (
    <>
      <div className="max-w-2xl mx-auto my-2">
        <div className="p-4 max-w-md rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Subscriptions History</h3>
          </div>
          {users?.map((user, index) => {
            return (
              <div key={index} className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-2 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{user.userName}</p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {user.createdAt}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MovieSubscription