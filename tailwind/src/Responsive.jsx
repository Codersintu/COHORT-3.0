import React from 'react'

function Responsive() {
  return (
   <div className="grid grid-cols-1 md:grid-cols-12">
        <p className='bg-green-600 md:col-span-4'>list1</p>
        <p className='bg-red-600 md:col-span-4'>list2</p>
        <p className='bg-gray-500 md:col-span-4'>list3</p>

      </div>
  )
}

export default Responsive