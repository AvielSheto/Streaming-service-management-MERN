import React from 'react'
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Home() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)


  useEffect(() => {
    if (!user) {
      navigate('/login')
    }

  }, [user, navigate])
  return (
    <div>
      <h1>main</h1>
      <button>manage users</button>
      <button>movies</button>
      <button>subscription</button>
      <button></button>

      <Outlet />
    </div>
  )
}
