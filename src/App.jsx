import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './componets/Contador'
import Input from './componets/Input'
import Login from './componets/Login'

function App() {
 

  return (
    <>
     <Contador/>
      <div>
        <Login/>
      </div>
    </>
  )
}

export default App
