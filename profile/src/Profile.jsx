import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

function Profile() {
  return (
    <div className='w-[100vw] h-screen'>
        <div className="flex">
            <div className="flex-1">
                <Sidebar/>
            </div>
            <div className="flex-7"><Content/></div>
        </div>
    </div>
  )
}

export default Profile