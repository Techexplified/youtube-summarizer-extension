import { useState } from 'react'
import "./index.css"
import Accordion from './components/Accordion'

function App(props) {
  const {isDark} = props;
  return (
    <div className={`w-full rounded !p-3 ${isDark?"!text-white":"!text-black"} !border !border-[#b7b7b7] !my-3`}>
       <Accordion/>
    </div>
  )
}

export default App
