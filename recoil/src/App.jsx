import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot, useRecoilValue} from "recoil"
import { jobAtom, messageAtom, notificationAtom, sumSelector } from './store'
function App() {
  

  return (
    <>
     <RecoilRoot>
      <MainApp/>
      </RecoilRoot>
    </>
  )
}

function MainApp(){
  const notificationvalue=useRecoilValue(notificationAtom)
  const messageAto0m=useRecoilValue(messageAtom)
  const jobatomm=useRecoilValue(jobAtom)
  const sumselector=useRecoilValue(sumSelector)

  // lets try usememo instead of selector for optimization i should always use
  // selector cuz more cleaner
  const sumMemo=useMemo(()=>{
    return notificationAtom +messageAto0m+jobatomm
  },[notificationAtom,messageAto0m,jobatomm])
  return (
    <>
    <button>home</button>
    <button>notification ({notificationvalue >=100 ? "99+":notificationAtom})</button>
    <button>job({jobatomm})</button>
    <button>message ({messageAto0m})</button>
    <button>Me ({sumMemo})</button>
    </>
  )
}

export default App
