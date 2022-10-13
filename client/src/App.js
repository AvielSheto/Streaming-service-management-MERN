import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sign from './components/sign/SignIn';
import SignUp from './components/sign/SignUp';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Sign/>}/>
        <Route path='signUp' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
