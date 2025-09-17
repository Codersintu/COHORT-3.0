import React, { useState } from 'react'

function Otp({refrence,onDone,goBack}) {
  const [InputBox,setInputBox]=useState("")
  return (
    <div>
        <input value={InputBox} onKeyUp={(e)=>{
          if (e.key =="Backspace") {
            goBack();
            setInputBox("")
          }
        }} ref={refrence}
         onChange={(e)=>{
          const val=e.target.value
            if (val =="1" || val=="2" || val=="3"||val=="4"||val=="5"||val=="6"||val=="7"||val=="8"||val=="9") {
              setInputBox(val)
              onDone()
            } else {
              
            }
         }} type="text" className='w-[40px] rounded-2xl bg-gray-500 px-4 text-white' />
    </div>
  )
}

export default Otp