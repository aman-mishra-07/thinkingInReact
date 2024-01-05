import React from 'react'

const Nav = ({ loggedIn, selectPage }) => {
  return (
    <>
      <div className='w-full px-8 py-4 bg-red-300 flex items-center justify-between'>
        <span className='text-2xl font-bold'>Learning React js</span>
        <ul className='flex items-center gap-4'>
            <li>
                <button type='button' className='font-semibold' onClick={()=> selectPage('home')} >Home</button>
            </li>
            <li>
                <button type='button' className='font-semibold' onClick={()=> selectPage('profile')} >Profile</button>
            </li>
            <li>
                <button type='button' className='font-semibold'onClick={()=> selectPage('settings')} >Settings</button>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Nav
