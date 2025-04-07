import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='min-h-screen w-full bg-white  rounded-lg'>
      <div className='mb-8 flex'>
        <Link to="#">
          <img
            src="http://localhost:3001/images/Logo.png"
            alt="Logo"
            className='w-full h-auto max-h-10 object-contain'
          />
        </Link>
      </div>

      <ul className='space-y-2'>
        <li>
          <Link
            to="/"
            className='flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black hover:bg-pink-400 hover:text-white transition-colors'
          >
            <img
              src="http://localhost:3001/images/Squaresfour1.png"
              alt="Dashboard Icon"
              className='w-6 h-6 object-cover'
            />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/Project"
            className='flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black hover:bg-pink-400 hover:text-white transition-colors'
          >
            <img
              src="http://localhost:3001/images/Folder.png"
              alt="Dashboard Icon"
              className='w-6 h-6 object-cover'
            />
            Project
          </Link>
        </li>
        <li>
          <Link
            to="/Teams"
            className='flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black hover:bg-pink-400 hover:text-white transition-colors'
          >
            <img
              src="http://localhost:3001/images/Groups.png"
              alt="Dashboard Icon"
              className='w-6 h-6 object-cover'
            />
            Teams
          </Link>
        </li>
        <li>
          <Link
            to="/Analytics"
            className='flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black hover:bg-pink-400 hover:text-white transition-colors'
          >
            <img
              src="http://localhost:3001/images/Piechart.png"
              alt="Dashboard Icon"
              className='w-6 h-6 object-cover'
            />
            Analytics
          </Link>
        </li>
        <li>
          <Link
            to="/Messages"
            className='flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black hover:bg-pink-400 hover:text-white transition-colors'
          >
            <img
              src="http://localhost:3001/images/Chat.png"
              alt="Dashboard Icon"
              className='w-6 h-6 object-cover'
            />
            Messages
          </Link>
        </li>
        <li>
          <Link
            to="/Intergrations"
            className='flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black hover:bg-pink-400 hover:text-white transition-colors'
          >
            <img
              src="http://localhost:3001/images/Code.png"
              alt="Dashboard Icon"
              className='w-6 h-6 object-cover'
            />
            Intergrations
          </Link>
        </li>
      </ul>
      <div className='w-full p-3 bg-blue-100 mt-10 h-115 rounded-lg grid place-items-center'>
        <img
          src="http://localhost:3001/images/Group.png"
          alt="Group"
          className='w-full object-cover'
        />
        <p className='font-bold text-2xl m-2'>V2.0 is available</p>
        <button className='mb-5 border border-blue-500 text-blue-500 hover:bg-blue-50 cursor-pointer font-medium py-1.5 px-10.5 rounded-md text-sm'>
          Try now
        </button>
      </div>
    </div>
  )
}

export default Menu