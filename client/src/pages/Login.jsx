import React, { useState } from 'react'

const Login = () => {
   const [name, setName] =useState();
   const [password, setPassword] = useState();
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pass"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
       
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login