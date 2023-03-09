import {BsFacebook} from 'react-icons/bs'
import React from 'react'
import { signIn } from 'next-auth/react'

function Login() {
  return (
    <div className='grid place-items-center h-[80vh]'>
        <BsFacebook size={150} color="#3578e5" className='block'/>
        <h1 onClick={signIn} className='py-3 px-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
    </div>
  )
}

export default Login