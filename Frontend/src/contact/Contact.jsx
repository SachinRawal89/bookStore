import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contacts from '../components/Contacts'


function Contact() {
  return (
    <>      
        <Navbar/>
        <div className='min-h-screen'>
            <Contacts/>
        </div>        
        <Footer/>
      
    </>
  )
}

export default Contact
