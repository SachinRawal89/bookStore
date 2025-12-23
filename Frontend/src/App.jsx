import { useState } from 'react'
import './App.css'
import Home from './home/Home'
import Course from './course/Course'
import {Route, Routes} from "react-router-dom"
import Signup from "./components/Signup"
import Contact from "./contact/Contact"


function App() {
  

  return (
    <>
      {/*<Home/>
      <Course/> */}
      <div className=' dark:bg-slate-900 dark:text-white'>
        <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/course" element= {<Course/>} />
        <Route path="/signup" element= {<Signup/>} />
        <Route path="/contact" element= {<Contact/>} />
      </Routes>
      </div>      
    </>
  )
}

export default App
