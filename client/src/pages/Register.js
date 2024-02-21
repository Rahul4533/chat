import React from 'react'

function Register() {
  return (
    <div className="bg-blue-50 flex items-center">
    <form className='w-64 mx-auto'>
        <input type='text' placeholder='Username' className='block w-full rounded-sm p-2 mb-2'/>
        <input type='password' placeholder='password' className='block w-full rounded-sm p-2 mb-2'/>
        <button className="bg-blue-700 w-full rounded-sm text-white p-2">Register</button>
    </form>

    </div>
   
  )
}

export default Register