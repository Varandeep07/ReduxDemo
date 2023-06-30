import React from 'react';
import { useDispatch } from 'react-redux';
import {login, logout} from '../reducers/user';

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
            dispatch(login({name: 'varandeep', age: 22, email: 'varandeepsahota@gmail.com'}))
        }}
      >Login</button>

        <button
        onClick={() => {
            dispatch(logout())
        }}
      >Logout</button>

    </div>
  )
}

export default Login
